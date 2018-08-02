import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/auth.service";

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;
  userEmail: string;
  userPassword: string;
  submitButtonText: string;
  noAccountLabelText: string;
  googleSignUpButtonText: string;
  signUpButtonText: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthService,
              formBuilder: FormBuilder) {
    this.userEmail = 'Email';
    this.userPassword = 'Password';
    this.submitButtonText = 'Sign in';
    this.noAccountLabelText = 'Don\'t have account?';
    this.googleSignUpButtonText = 'Log in with google';
    this.signUpButtonText = 'Sign up';

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
  }
  signIn() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(HomePage),
        error => this.loginError = error.message
      );
  }
  createAccount() {
    console.log('createAccount');
  }
}
