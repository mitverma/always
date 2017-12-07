import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NgForm } from '@angular/forms';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
  providers : [AllPostProvider]
})
export class OrderPage {

	orderForm = {};
	orderFormData = {};
	message = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public FormBuilder: FormBuilder,public http:Http, public orderProvider: AllPostProvider) {
  }

  formOrder(orderForm){   
    console.log(orderForm,'orderForm');
  	this.orderProvider.saveOrder(this.orderForm).subscribe(data=>{
  		this.message = data;
      if(data.message == "successfully Registered Support Request"){
          this.message = true; 
          setTimeout(function(){
            this.message = false;
            console.log('out');
          }.bind(this),3000);
        }else {
          this.message = false;
        }
  	})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
