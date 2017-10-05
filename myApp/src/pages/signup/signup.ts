import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) {
  }
  loginRedirect(){
  this.navCtrl.push(LoginPage);
  }
  homeRoute(){
  this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.menu.enable(false);
  }

}
