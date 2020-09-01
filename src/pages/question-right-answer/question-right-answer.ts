import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionRightAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-right-answer',
  templateUrl: 'question-right-answer.html',
})
export class QuestionRightAnswerPage {
  showAnswerDetails: boolean = false;
  hideAnswerDetails: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionRightAnswerPage');
  }

  showExplanation() {
    this.showAnswerDetails = true;
    this.hideAnswerDetails = false;
  }

  hideExplanation(){
    this.showAnswerDetails = false;
    this.hideAnswerDetails = true;
  }
}
