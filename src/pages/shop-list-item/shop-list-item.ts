import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    console.log(this.shopList);
  }

}
