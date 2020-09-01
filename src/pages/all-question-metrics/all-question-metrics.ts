import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-question-metrics',
  templateUrl: 'all-question-metrics.html',
})
export class AllQuestionMetricsPage {
  correct: any = '50%';
  incorrect: any = '70%';
  allQuestionList: any = [
    {
      subject:'Science',
      total:3,
      result:2
    },
    {
      subject:'Nutrition',
      total:3,
      result:1
    },
    {
      subject:'Program Design',
      total:2,
      result:2
    },
    {
      subject:'Education',
      total:2,
      result:1
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  getPercent(ques: any) {
    return Math.round((ques.result/ques.total)*100);
  }

  getColor(ques: any) {
    if (Math.round((ques.result/ques.total)*100) < 50){
      return 'fail';
    }else if (Math.round((ques.result/ques.total)*100) >= 50 && Math.round((ques.result/ques.total)*100) < 100){
      return 'average';
    }else if (Math.round((ques.result/ques.total)*100) === 100){
      return 'pass';
    }
  }
}
