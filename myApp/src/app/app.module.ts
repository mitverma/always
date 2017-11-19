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
import { AllPostProvider } from '../providers/all-post/all-post';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllPostProvider
  ]
})
export class AppModule {}
