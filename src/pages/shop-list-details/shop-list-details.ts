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
  shopListIndex: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.shopList = navParams.get('shopList');
    this.shopListIndex = navParams.get('shopListIndex');
  }

  ionViewDidLoad() {
  }
  toggleActive(productIndex) {
    this.shopList.products[productIndex].isComplete ?
      this.shopList.products[productIndex].isComplete = false :
      this.shopList.products[productIndex].isComplete = true;
  }
  addNewProduct() {
    this.navCtrl.push(NewProductPage, { 'shopListIndex': this.shopListIndex });
  }

}
