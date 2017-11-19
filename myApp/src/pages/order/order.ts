import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';

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
	message = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http, public orderProvider: AllPostProvider) {
  }

  formOrder(){
  	// orderFormData = {
  		
  	// }
    
  	this.orderProvider.saveOrder(this.orderFormData).subscribe(data=>{
  		this.message = data;
  	})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
