import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewProductPage } from "../new-product/new-product";
import { DatabaseService } from "../../services/database.service";

@IonicPage()
@Component({
  selector: 'page-shop-list-details',
  templateUrl: 'shop-list-details.html',
})
export class ShopListDetailsPage {
  shopList: any;
  shopListKey: string;
  products: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseService: DatabaseService) {
    this.shopList = navParams.get('shopList');
    this.shopListKey = navParams.get('shopListKey');
    this.products = this.databaseService.getShopList(this.shopListKey);
  }

  toggleActiveProduct(productIndex, productKey) {
    let state = this.products[productIndex].isComplete;
    this.databaseService.updateProductState(this.shopList.key, productKey, !state);
  }
  addNewProduct() {
    this.navCtrl.push(NewProductPage, { 'shopListKey': this.shopListKey});
  }
  removeProduct(productIndex) {
    this.databaseService.removeProduct(this.shopListKey, productIndex);
  }
  removeShopList(shopListKey) {
    this.databaseService.removeShopList(shopListKey)
      .then(
        () => this.navCtrl.pop(),
        error => console.log(error.message)
      );
  }
}
