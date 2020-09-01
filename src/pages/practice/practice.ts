import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {
  isSubject: any;
  isQuestions: any;
  subjectList: any = [
    {
      name:'Subject 1',
      isSelected:false
    },
    {
      name:'Subject 2',
      isSelected:false
    }
  ];
  selectedSubject: any = 'Select Subject';
  selectedQuestion: any = 'Questions';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }


  selectSubject(subject: any) {
    this.selectedSubject = subject.name;
    this.isSubject === 1 ? this.isSubject = 0 : this.isSubject = 1;
  }
  selectQuestions(question: any) {
    this.selectedQuestion = question;
    this.isQuestions === 1 ? this.isQuestions = 0 : this.isQuestions = 1;
  }
}
