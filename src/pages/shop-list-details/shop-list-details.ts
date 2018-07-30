import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewProductPage } from "../new-product/new-product";

@IonicPage()
@Component({
  selector: 'page-shop-list-details',
  templateUrl: 'shop-list-details.html',
})
export class ShopListDetailsPage {

  shopList: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.shopList = navParams.get('shopList');
  }

  ionViewDidLoad() {
  }
  toggleActive() {
    this.shopList.complete ? this.shopList.complete = false : this.shopList.complete = true;
  }
  addNewProduct() {
    this.navCtrl.push(NewProductPage);
  }

}
