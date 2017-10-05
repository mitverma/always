import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FaqPage {
	
	faqArray : any;
  viewGroup = null;
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
