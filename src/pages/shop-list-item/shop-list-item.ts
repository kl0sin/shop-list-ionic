import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewItemPage } from "../new-item/new-item";

@IonicPage()
@Component({
  selector: 'page-shop-list-item',
  templateUrl: 'shop-list-item.html',
})
export class ShopListItemPage {

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
  addNewItem() {
    this.navCtrl.push(NewItemPage);
  }

}
