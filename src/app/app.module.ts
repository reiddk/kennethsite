import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientService } from './services/httpClient.service';
import { NotificationService } from './services/notification.service';
import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';

import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StubComponent } from './stub/stub.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';


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
    AppComponent,
    StubComponent,
    BookViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      NotifierModule.withConfig(customNotifierOptions),
      LoadingBarHttpClientModule,
      PdfViewerModule,
      FormsModule,
      HttpClientModule
  ],
    providers: [StorageService, NotificationService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
