import { Injectable, OnDestroy } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { BehaviorSubject, throwError, Subscription, interval } from 'rxjs';
import { map, catchError, take, timeout } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';  

import { environment } from '../../environments/environment';
import { ResourceConfig } from '../config/resource.config';
import { NotificationService } from './notification.service';
import { StorageService } from './storage.service';

@Injectable()
export class HttpClientService implements OnDestroy {
    public sessionKey: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    vcRef: ViewContainerRef;
  showError = true;

    setSessionKey(value) {
        this.sessionKey.next(value);
    }

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private notificationService: NotificationService) {
    }

  post(serviceUrl: string, params: string = '',
    yardDates: any,
    block = true,
    version: string = '',
    contentType = 1,
    isSecured = true) {
      const url = environment.bookLocation + version + serviceUrl;
    if (!this.storageService.currentlyRequestingUrl[url] || !block) {
      this.storageService.currentlyRequestingUrl[url] = true;
      return this.http.post(url, yardDates)
        .pipe(map((res: any) => {
          this.storageService.currentlyRequestingUrl[url] = false;
          return res;
        }))
        .pipe(catchError(err => {
          this.storageService.currentlyRequestingUrl[url] = false;
          return this.handleError(err);
        }));
    } else {
      return null;
    }
  }

  get(serviceUrl: string, params: string = '',
    version: string = '',
    absolute: boolean = false) {
      let url = environment.bookLocation + version + serviceUrl;
    if (absolute) {
      url = serviceUrl;
    }
    if (!this.storageService.currentlyRequestingUrl[url]) {
      this.storageService.currentlyRequestingUrl[url] = true;
        return this.http.get(url)
        .pipe(map((res: any) => {
          this.storageService.currentlyRequestingUrl[url] = false;
          return res;
        }))
        .pipe(catchError(err => {
          this.storageService.currentlyRequestingUrl[url] = false;
          return this.handleError(err);
        }));
    } else {
      return null;
    }
  }


  protected handleError(error: Response | any) {
    if (!this.showError) {
      return;
    } else {
      this.showError = false;

      interval(1000).pipe(take(1)).subscribe(out => {
        this.showError = true;
      });
    }
        const erros: string[] = [];
      const errorMessage = (error && error.error && error.error.message) ? error.error.message : null;
        switch (error.status) {
            case 0:
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.StatusUnreachable.desc, (errorMessage) ?errorMessage:ResourceConfig.StatusUnreachable.title);
                break
            case 400:
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.Status400.desc, (errorMessage) ? errorMessage :ResourceConfig.Status400.title);
                break;
            case 401:
              this.storageService.error401Called = true;
              setTimeout(() => {
                this.storageService.error401Called = false; 
              }, 3000);
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.Status401.desc, (errorMessage) ? errorMessage :ResourceConfig.Status401.title);
                break;
            case 440:
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.Status440.desc, (errorMessage) ? errorMessage :ResourceConfig.Status440.title);
                break;
            case 500:
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.Status500.desc, (errorMessage) ? errorMessage :ResourceConfig.Status500.title);
                break;
            case 503:
            this.notificationService.showError((errorMessage) ? "" :ResourceConfig.Status503.desc, (errorMessage) ? errorMessage :ResourceConfig.Status503.title);
                break;
            default:
                this.notificationService.showError('Error', 'Something went wrong')
                break;
        }

      return throwError(new Error(error.status, ''));
  }

  ngOnDestroy() {
  }
}

export class Error {
    key: string;
    description: string;
    errors: Error[] = [];

    constructor(key: string, description: string) {
        this.key = key;
        this.description = description;
    }
}
