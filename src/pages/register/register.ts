import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
  submitButtonText: string;
  goToLoginText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userEmail = 'Email';
    this.userPassword = 'Password';
    this.userPasswordConfirm = 'Confirm password';
    this.submitButtonText = 'Sign up';
    this.goToLoginText = 'Already have account? Sing-up';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  signUp() {
    console.log('signUp');
  }

}
