import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
	Videos : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.Videos = [{
  		img: "assets/img/video.jpg",
  		title : "Aquatatva Purification Process"
  	},{
  		img: "assets/img/video.jpg",
  		title : "Aquatatva Purification Process"
  	}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

}
