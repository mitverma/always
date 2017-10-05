import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ContactusPage } from '../pages/contactus/contactus';
import { SupportPage } from '../pages/support/support';
import { FaqPage } from '../pages/faq/faq';
import { OrderPage } from '../pages/order/order';
import { SignupPage } from '../pages/signup/signup';
import { VideosPage } from '../pages/videos/videos';
import { UsagePage } from '../pages/usage/usage';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Usage & Benefits', component: UsagePage },
      { title: 'Videos', component: VideosPage },
      { title: 'Order an Accessory', component: OrderPage },
      { title: 'Support', component: SupportPage },
      { title: 'FAQs', component: FaqPage },
      { title: 'Contact Us', component: ContactusPage },
      { title: 'User Profile', component: ProfilePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
