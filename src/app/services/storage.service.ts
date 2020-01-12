
import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class StorageService {
    currentlyRequestingUrl = {};
    error401Called: boolean = false;
};
