import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-review-details',
  templateUrl: 'review-details.html',
})
export class ReviewDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewDetailsPage');
  }

  reviewQuestion(){
    this.navCtrl.push('AllQuestionPage');
  }

}
