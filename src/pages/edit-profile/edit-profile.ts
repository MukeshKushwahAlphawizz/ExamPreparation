import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController,
              public viewCtrl : ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  save() {
    this.viewCtrl.dismiss();
  }
}
