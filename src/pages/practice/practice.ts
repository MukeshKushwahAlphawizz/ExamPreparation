import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {
  flaggedQuestion: any;
  isSubject: any;
  isQuestions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  selectFlagged(data: any) {

  }
}
