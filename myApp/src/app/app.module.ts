import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { AllPostProvider } from '../providers/all-post/all-post';

import{Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';

export const firebaseconf={
  apiKey: "AIzaSyAGE7vij6q6DBLfOvgK0JCCnHK9ZvcVO0c",
  authDomain: "aquatatva-29da9.firebaseapp.com",
  databaseURL: "https://aquatatva-29da9.firebaseio.com",
  projectId: "aquatatva-29da9",
  storageBucket: "aquatatva-29da9.appspot.com",
  messagingSenderId: "169398150628"
};

firebase.initializeApp(firebaseconf);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ContactusPage,
    SupportPage,
    FaqPage,
    OrderPage,
    SignupPage,
    VideosPage,
    UsagePage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ContactusPage,
    SupportPage,
    FaqPage,
    OrderPage,
    SignupPage,
    VideosPage,
    UsagePage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BrowserTab,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllPostProvider,
    Facebook,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
