import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {AllPostProvider} from '../../providers/all-post/all-post';

/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
  providers : [AllPostProvider]
})
export class FaqPage {
  faqArray : any;
  viewGroup = null;
	posts = [];
  viewAccordion(view){
    console.log(view);
    if(this.viewDetails(view)){
      this.viewGroup = null;
      console.log(view);
    }else{
      this.viewGroup = view;
      console.log(view);
    }
  };
  viewDetails(view){
    return this.viewGroup === view;
  }

  constructor(public navCtrl: NavController, public http: Http,public navParams: NavParams,public faqProvider: AllPostProvider) {
 //  this.faqProvider.getFaq().subscribe(data =>{
 //    console.log(data,'what is data');
 //   this.posts = data;
 // });

    this.http.get('https://aquatatva.herokuapp.com/api/showfaq').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });
 
  this.faqArray = [
  {
    title: "accordion1",
    descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
  },{
    title: "accordion2",
    descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
  },{
    title: "accordion3",
    descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
  },
  ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
