import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QotdMetricsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qotd-metrics',
  templateUrl: 'qotd-metrics.html',
})
export class QotdMetricsPage {
  correct: any = '50%';
  incorrect: any = '70%';
  questionList: any = [
    {
      question:'Lorem Ipsum is simply dummy text of the printing',
      isCorrect:true
    },
    {
      question:'Lorem Ipsum is simply dummy text of the printing',
      isCorrect:false
    },
    {
      question:'Lorem Ipsum is simply dummy text of the printing',
      isCorrect:true
    },
    {
      question:'Lorem Ipsum is simply dummy text of the printing',
      isCorrect:false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QotdMetricsPage');
  }

}
