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
  showAccessoryType = false;
	orderForm = {};
  orderFormData = {};
  message = false;
  orderOption: any[];
  orderAccessory : any[] = [];
  // orderOption = ['amit','vikas','aniruddh'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public FormBuilder: FormBuilder,public http:Http, public orderProvider: AllPostProvider) {
    // this.orderOption = ['A51 - Pre Filter inlet pipe 1 meter','A52 - Ionizer inlet pipe 1 meter','A53 - Acidic water  ionizer output pipe  1 meter','A54 - Filter','Alkaline water output hose'];
    this.orderOption = [{
      'name':'A51 - Pre Filter inlet pipe 1 meter',
      'quantity': '1',
      'value': false
    },{
      'name':'A52 - Ionizer inlet pipe 1 meter',
      'quantity': '1',
      'value': false
    }, {
      'name':'A53 - Acidic water  ionizer output pipe  1 meter',
      'quantity': '1',
      'value': false
    }, {
      'name':'A54 - Filter',
      'quantity': '1',
      'value': false
    },{
      'name':'Alkaline water output hose',
      'quantity': '1',
      'value': false
    }]
  }
  addAccessory(order,i){
    console.log(order,'order',this.orderAccessory,i);
    if(order.value == false){
      console.log('push');
      this.orderAccessory.push(order);
      this.orderOption[i].value = true;
      this.orderOption[i].class = "active";
    }else{
      console.log('slice');
      this.orderAccessory.splice(order,1);
      this.orderOption[i].value = false;
      this.orderOption[i].class = "";
    }
    console.log(order,'order',this.orderAccessory,i);
  }

  formOrder(orderForm){   
    console.log(orderForm,'orderForm');
    orderForm.accessory = this.orderAccessory;
    console.log(orderForm,'new value');
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
