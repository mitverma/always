import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

/**
 * Generated class for the SupportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  providers : [AllPostProvider]
})
export class SupportPage {
  message = false;
  supportDone = "";
  supportForm = {};
  
  // let fileSelect =  document.querySelector('input[type=file]').files[0];
  // console.log(fileSelect,'file');
  constructor(public navCtrl: NavController, public navParams: NavParams,public FormBuilder: FormBuilder, public http:Http, public supportProvider: AllPostProvider) {
   
  }
  // this.supportForm = this.formBuilder.group({
  //   'name': ['',[Validators.required]],
  //   'contact': ['',[Validators.required]],
  // })
    formSupport() {
      this.supportProvider.saveSupportData(this.supportForm).subscribe(data=>{
        this.supportDone = data;
        if(data.message == "successfully Registered Support Request"){
          this.message = true; 
          setTimeout(function(){
            this.message = false;
            console.log('out');
          },3000);
        }else {
          this.message = false;
        }
      console.log(this.supportForm,'supportForm');
      });
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
