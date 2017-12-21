import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';
import { Observable } from 'rxjs/Observable';

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
  channelId = 'UCZZPgUIorPao48a1tBYSDgg';
  playlists: Observable<any[]>;
  // UCU8x9woUxeNP2CPiakF_4bw
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public videoProvider: AllPostProvider) {
  	this.Videos = [{
  		img: "assets/img/video.jpg",
  		title : "Aquatatva Purification Process"
  	},{
  		img: "assets/img/video.jpg",
  		title : "Aquatatva Purification Process"
  	}];
  }
  searchPlaylists() {
    this.playlists = this.videoProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      // let alert = this.alertCtrl.create({
      //   title: 'Error',
      //   message: 'No Playlists found for that Channel ID',
      //   buttons: ['OK']
      // });
      // alert.present();
      console.log('error');
    })
  }
 
  openPlaylist(id) {
    this.navCtrl.push('PlaylistPage', {id: id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

}
