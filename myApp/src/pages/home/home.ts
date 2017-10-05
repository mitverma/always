import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactusPage } from '../contactus/contactus';
import { SupportPage } from '../support/support';
import { FaqPage } from '../faq/faq';
import { OrderPage } from '../order/order';
import { SignupPage } from '../signup/signup';
import { VideosPage } from '../videos/videos';
import { UsagePage } from '../usage/usage';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  viewVideos(){
  	this.navCtrl.push(VideosPage);
  };
  viewUsage(){
  	this.navCtrl.push(UsagePage);
  }
viewOrder(){
	this.navCtrl.push(OrderPage);
}
viewSupport(){
	this.navCtrl.push(SupportPage);
}
viewFaq(){
	this.navCtrl.push(FaqPage);
}
viewContact(){
	this.navCtrl.push(ContactusPage);
}

}
