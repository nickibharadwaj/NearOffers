import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { isGPSEnabled } from '../common/is-gps-enabled';
import { oneSignalAppId, sender_id } from '../config';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class NearByOffers {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private oneSignal: OneSignal,
        private geoLocation: Geolocation       
      ) {
    this.initializeApp();

    // pages for navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (isCordovaAvailable()) {
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
      }

      if (isGPSEnabled()) {
        alert('GPS test');
        setInterval(this.getLocation(), 3000);
      }
    });
  }


  getLocation() {
    this.geoLocation.getCurrentPosition().then((res) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //let location= 'lat'+ res.coords.latitude +'lang'+ res.coords.longitude;
      // let location='lat '+res.coords.latitude+' lang '+res.coords.longitude;
      let location = {
        'lat': res.coords.latitude,
        'lang': res.coords.longitude
      }


      alert('location detected:' + res.coords.latitude +  res.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }
  
}
