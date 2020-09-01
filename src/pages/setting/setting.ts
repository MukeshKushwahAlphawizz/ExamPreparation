import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from "ionic-angular/index";
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  remQOTD: any;
  showBadge: any = true;

  studyNotificationTime: String = new Date().toISOString();
  examDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public util: UtilProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  selectRemQOTD(data: any) {

  }

  selectBadge(data: any) {

  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Study Reminder Frequency');
    alert.setSubTitle('Choose a frequency for your study time notification');
    alert.addButton({text: 'Never',
      handler: data => {
    }});
    alert.addButton({text: 'Daily',
      handler: data => {
    }});
    alert.addButton({text: 'Weekly',
      handler: data => {
    }});
    alert.addButton({text: 'Monthly',
      handler: data => {
    }});
    alert.present();
  }

  reset() {
    let acc ="account's"
    let title = 'Reset Progress?'
    let subTitle = 'Warning! You are about to delete all of your '+acc+' study progress, including past exam and Question of the Dat history. This cannot be undone.'
    this.util.presentConfirm(title, subTitle,'Reset Progress').then(succ=>{
    }).catch(err=>{});
  }

  accountInfo() {
    this.navCtrl.push('AccountInfoPage');
  }
}
