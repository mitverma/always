import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    
  }
  signupRedirect(){
     this.navCtrl.push(SignupPage);
  }
  homeRoute(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false);
  }
  loginSwipe($event) {
  	console.log($event,'event')
	}

}
