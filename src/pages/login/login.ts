import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from '../../providers';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  error_messages: any = {};
  constructor(public navCtrl: NavController,
    public user: User,
    public formBuilder: FormBuilder) {
    this.setupLoginFormData();
  }
  setupLoginFormData() {
    this.error_messages = {
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
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
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

  signUp() {
    this.navCtrl.push('SignUpPage');
  }

  login() {
    this.navCtrl.setRoot('TabsPage')
  }

  forgotPass() {
    this.navCtrl.push('ForgotPasswordPage');
  }
}
