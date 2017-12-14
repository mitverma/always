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

  rootPage: any = SignupPage;

  pages: Array<{icon: any, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'assets/img/home.png', title: 'Home', component: HomePage },
      { icon: 'assets/img/usage-benefits.png', title: 'Usage & Benefits', component: UsagePage },
      { icon: 'assets/img/youtube.png', title: 'Videos', component: VideosPage },
      { icon: 'assets/img/order-icon.png', title: 'Order an Accessory', component: OrderPage },
      { icon: 'assets/img/support.png', title: 'Support', component: SupportPage },
      { icon: 'assets/img/faq.png', title: 'FAQs', component: FaqPage },
      { icon: 'assets/img/phone-book.png', title: 'Contact Us', component: ContactusPage },
      { icon: 'assets/img/man-user.png', title: 'User Profile', component: ProfilePage },
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
