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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userEmail = 'Email';
    this.userPassword = 'Password';
    this.submitButtonText = 'Sign in'
  }

  ionViewDidLoad() {
  }
  signIn() {
    console.log('signIn');
  }
}
