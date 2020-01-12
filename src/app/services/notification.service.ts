import { Injectable } from '@angular/core';
import { ApplicationRef, NgZone, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class NotificationService {
  vcRef: ViewContainerRef;
  private notifier: NotifierService;

  constructor(notifier: NotifierService, public componentFactoryResolver: ComponentFactoryResolver,
        public ngZone: NgZone, public appRef: ApplicationRef) {
    this.notifier = notifier;
  }

  /**
* Hide oldest notification
*/
  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

    showNotification() {
      this.notifier.notify('error', 'This is not good!');
    }

  showWarning(message: string, title: string) {
    this.notifier.notify('warning', title + ": " + message);
    }

  showError(message: string, title: string) {
    console.log('->',message);
    this.notifier.notify('error', title + ": " + message);
    }

  showSuccess(message: string, title: string) {
    this.notifier.notify('success', title + ": " + message);
    }

  showInfo(message: string, title: string) {
    this.notifier.notify('info', title + ": " + message);
    }
}
