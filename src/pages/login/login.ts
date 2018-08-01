import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userEmail: string;
  userPassword: string;
  submitButtonText: string;
  noAccountLabelText: string;
  googleSignUpButtonText: string;
  signUpButtonText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userEmail = 'Email';
    this.userPassword = 'Password';
    this.submitButtonText = 'Sign in';
    this.noAccountLabelText = 'Don\'t have account?';
    this.googleSignUpButtonText = 'Log in with google';
    this.signUpButtonText = 'Sign up';
  }

  ionViewDidLoad() {
  }
  signIn() {
    console.log('signIn');
  }
  createAccount() {
    console.log('createAccount');
  }
}
