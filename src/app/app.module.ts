import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewListModalPage } from '../pages/new-list-modal/new-list-modal';
import { ShopListProvider } from '../providers/shop-list/shop-list';
import { ShopListItemPage } from "../pages/shop-list-item/shop-list-item";
import { NewItemPage } from "../pages/new-item/new-item";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewListModalPage,
    ShopListItemPage,
    NewItemPage,
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
    ListPage,
    NewListModalPage,
    ShopListItemPage,
    NewItemPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShopListProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
