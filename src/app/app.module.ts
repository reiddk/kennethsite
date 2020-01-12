import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientService } from './services/httpClient.service';
import { NotificationService } from './services/notification.service';
import { StorageService } from './services/storage.service';

import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 10000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      NotifierModule.withConfig(customNotifierOptions),
      LoadingBarHttpClientModule
  ],
    providers: [StorageService, NotificationService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
