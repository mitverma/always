import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class UsagePage {

	slides: any[];
	mySlideOptions = {
		page: true
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
