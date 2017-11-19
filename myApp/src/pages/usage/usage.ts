import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';

/**
 * Generated class for the UsagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usage',
  templateUrl: 'usage.html',
  providers : [AllPostProvider]
})
export class UsagePage {

  usageBenefits = [];
	slides: any[];
	mySlideOptions = {
		page: true
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public usageProvider: AllPostProvider) {
  	// this.usageProvider.getBenefit().subscribe(data=>{
   //    console.log(data,'what is data');
   //    this.usageBenefits = data;
   //  });
    
    this.http.get('https://aquatatva.herokuapp.com/api/showbenefit').map(res => res.json()).subscribe(data => {
        this.usageBenefits = data;
        console.log(this.usageBenefits,'usage getBenefit');
    });
    this.slides = [
  	 {
  	 	img: "assets/img/video.jpg",
  	 	descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
  	 }, {
  	 	img: "assets/img/video.jpg",
  	 	descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
  	 }, {
  	 	img: "assets/img/video.jpg",
  	 	descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
  	 }
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsagePage');
  }

}
