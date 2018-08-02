import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/auth.service";

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm: FormGroup;
  registerError: string;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
  submitButtonText: string;
  goToLoginText: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthService,
              formBuilder: FormBuilder) {
    this.userEmail = 'Email';
    this.userPassword = 'Password';
    this.userPasswordConfirm = 'Confirm password';
    this.submitButtonText = 'Sign up';
    this.goToLoginText = 'Already have account? Sing-up';

    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  signUp() {
    let data = this.registerForm.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.registerError = error.message
    );
  }

}
