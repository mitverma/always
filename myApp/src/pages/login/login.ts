import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NgForm } from '@angular/forms';

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
  providers : [AllPostProvider]
})
export class LoginPage { 
loginForm = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController,public FormBuilder: FormBuilder, public http : Http, public loginProvider: AllPostProvider) {
    
  }
  signupRedirect(){
     this.navCtrl.push(SignupPage);
  }
  homeRoute(){
    this.navCtrl.push(HomePage);
  }
  login(loginForm){
    console.log(loginForm,'loginForm');
    // let loginUrl = https://aquatatva.herokuapp.com/api/login?email='+loginForm.email+'&password='+loginForm.password
    this.http.post('https://aquatatva.herokuapp.com/api/login?email='+loginForm.email+'&password='+loginForm.password+'').map(res => res.json()).subscribe(data =>{
      if(data){
        this.navCtrl.setRoot(HomePage); 
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem('token'),'token');
      }else {

      }

    })
  }
  // login(loginForm){
  //   this.loginProvider.loginView(loginForm).subscribe(data=>{
  //     if(data){
  //       this.navCtrl.setRoot(HomePage); 
  //       localStorage.setItem('token', data.token);
  //       console.log(localStorage.getItem('token'),'token');
  //     }else {

  //     }
  //   })
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false);
  }
  loginSwipe($event) {
  	console.log($event,'event')
	}

}
