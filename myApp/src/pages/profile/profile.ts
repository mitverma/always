import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 	editView = true;
	userForm = {
		first_name : "",
		last_name: "",
		email: "",
		mobile: "",
		notification: "",
		provider: "",
		city: "",
		state: "",
		country: "",
		token:"",
		id: "",
	};
 	userData = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public FormBuilder: FormBuilder, public http : Http, public loginProvider: AllPostProvider) {
  }

  ionViewDidLoad() {
  	let token = localStorage.getItem('token');
  	console.log(token);
    console.log('ionViewDidLoad ProfilePage');
      	this.http.get('https://aquatatva.herokuapp.com/api/show/'+token+'').map(res => res.json()).subscribe(data =>{
      if(data){
        this.userData = data[0];
        console.log(this.userData,'userData');
        // this.userForm.first_name = this.userData.first_name; 
        // this.userForm.last_name = this.userData.last_name; 
        // this.userForm.mobile = this.userData.mobile; 
        // this.userForm.email = this.userData.email; 
        // this.userForm = this.userData;
        console.log(this.userForm,'userForm');
      }else {

      }
    })
  }

  editProfile(){
  	console.log('edit');
  	this.editView = false;
  }
  userProfile(formData){
  	console.log(formData,'formdata');
  	this.http.put('https://aquatatva.herokuapp.com/api/updateuser/'+formData.id+'',{
  		first_name: formData.first_name,
  		last_name: formData.last_name,
  		id: formData.id,
  		email: formData.email,
  		mobile: formData.mobile,
  		notification: formData.notification,
  		provider: formData.provider,
  		city: formData.city,
  		state: formData.state,
  		country: formData.country,
  		token: formData.token,
  		created_at: formData.created_at,
  		updated_at: formData.updated_at,
  		address: formData.address,
  	}).map(res => res.json()).subscribe(data =>{
  		if(data){

  		}
  	})
  }
}

