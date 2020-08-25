import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ViewController} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signUpForm: FormGroup;
  error_messages: any = {};
  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.setupSignUpFormData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    this.navCtrl.setRoot('TabsPage');
  }

  setupSignUpFormData() {
    this.error_messages = {
      username: [
        { type: "required", message: 'FullName is required' }
      ],
      mobileNumber: [
        { type: "required", message: 'Mobile number is required' },
        { type: "minlength", message: 'Minimum length should be 10' },
        { type: "maxlength", message: 'Maximum length should be 12' }
      ],
      email: [
        { type: "required", message: "Email is required" },
        { type: "pattern", message: 'Please enter valid email' }
      ],
      password: [
        { type: "required", message: 'Password is required' },
        { type: "minlength", message: "Minimun length should be 8" },
        { type: "maxlength", message: "Maximum length should be 12" }
      ]
    };
    this.signUpForm = this.formBuilder.group(
      {
        username: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),
        mobileNumber: new FormControl(
          "", Validators.compose([Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12)
          ])
        )},
    );
  }

  login() {
    this.viewCtrl.dismiss();
  }
}
