import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NgForm } from '@angular/forms';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Facebook} from '@ionic-native/facebook';
// import firebase from 'firebase';

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
  providers : [AllPostProvider]
})
export class SignupPage {
  message = false;
  messageFalse = false;
  signupForm = {};
  signUpData = {
    first_name : "",
    last_name: "",
    email: "",
    password: ""
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,public FormBuilder: FormBuilder,public menu:MenuController,public http:Http, public signupProvider: AllPostProvider, private iab:InAppBrowser,public fb:Facebook) {
    console.log(this.signUpData,'sign');
  }

  facebookAuth(){
    // const facebooklogin=this.iab.create('https://aquatatva.herokuapp.com/api/auth/facebook','_self','location=no');
    this.fb.login(['email']).then(res=>{
      alert(JSON.stringify(res))
      })
  }
   signup(signupValue){
    console.log(signupValue);
    this.signUpData.first_name = signupValue.firstname;
    this.signUpData.last_name = signupValue.lastname;
    this.signUpData.email = signupValue.email;
    this.signUpData.password = signupValue.password;
    console.log(this.signUpData)
    this.signupProvider.saveSignup(this.signUpData).subscribe(data=>{
      // successfully created user
      if(data){
        localStorage.setItem('aqua-token',data.token);
        // this.message = true;
        // setTimeout(function(){
        //   this.message = false;
        // },6000);
        this.navCtrl.setRoot(HomePage);        
      }else {
        // this.messageFalse = true;
        // setTimeout(function(){
        //   this.messageFalse = false;
        // },6000);
      }
    })
  }
  // signup google 
  // signupGoogle(){
  //   this.signupProvider.google().subscribe(data=>{
  //     console.log(data,'what is data');
  //   });
  // }
  // signup google end
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
