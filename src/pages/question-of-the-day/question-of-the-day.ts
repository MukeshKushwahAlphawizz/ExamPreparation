import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-question-of-the-day',
  templateUrl: 'question-of-the-day.html',
})
export class QuestionOfTheDayPage {
isQuestionListStart:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionOfTheDayPage');
  }

  tapQuestionList(){
    this.isQuestionListStart=false;
  }

  submitAnswer(){
    
  }

}
