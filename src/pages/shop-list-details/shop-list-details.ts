import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewProductPage } from "../new-product/new-product";
import { ShopListProvider } from "../../providers/shop-list/shop-list";

@IonicPage()
@Component({
  selector: 'page-shop-list-details',
  templateUrl: 'shop-list-details.html',
})
export class ShopListDetailsPage {
  shopList: any;
  shopListIndex: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shopListProvider: ShopListProvider) {
    this.shopList = navParams.get('shopList');
    this.shopListIndex = navParams.get('shopListIndex');
  }

  ionViewDidLoad() {
  }
  toggleActiveProduct(productIndex) {
    this.shopListProvider.toggleActiveProduct( { shopListIndex: this.shopListIndex, productIndex: productIndex });
  }
  addNewProduct() {
    this.navCtrl.push(NewProductPage, { 'shopListIndex': this.shopListIndex });
  }
  removeProduct(productIndex) {
    this.shopListProvider.removeProduct({ shopListIndex: this.shopListIndex, productIndex: productIndex });
  }
  removeShopList() {
    this.shopListProvider.removeShopList({ index: this.shopListIndex });
    this.navCtrl.pop();
  }

}
