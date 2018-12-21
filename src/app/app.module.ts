import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { DataService } from './data.service';
import { Geolocation } from '@ionic-native/geolocation';


import { NearByOffers } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NearByOffers,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,  
    IonicModule.forRoot(NearByOffers),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NearByOffers,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    DataService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
