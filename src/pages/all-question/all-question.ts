import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-all-question',
  templateUrl: 'all-question.html',
})
export class AllQuestionPage {
  segmentModel: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.segmentModel = "all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllQuestionPage');
  }

  segmentChanged(event) {
    console.log('event', event)
  }

  clickonQuestion(){
    this.navCtrl.push('QuestionOfTheDayPage');
  }
}
