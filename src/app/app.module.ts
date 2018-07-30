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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewListModalPage,
    ShopListDetailsPage,
    NewProductPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewListModalPage,
    ShopListDetailsPage,
    NewProductPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShopListProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
