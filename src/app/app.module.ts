import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewListModalPage } from '../pages/new-list-modal/new-list-modal';
import { ShopListProvider } from '../providers/shop-list/shop-list';
import { ShopListDetailsPage } from "../pages/shop-list-details/shop-list-details";
import { NewProductPage } from "../pages/new-product/new-product";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { firebaseConfig } from "../config";
import { AuthService } from "../services/auth.service";
import { DatabaseService } from "../services/database.service";
import { NgxErrorsModule } from "@ultimate/ngxerrors";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewListModalPage,
    ShopListDetailsPage,
    NewProductPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewListModalPage,
    ShopListDetailsPage,
    NewProductPage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShopListProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    DatabaseService,
  ]
})
export class AppModule {}
