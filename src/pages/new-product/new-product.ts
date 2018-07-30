import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopListProvider } from "../../providers/shop-list/shop-list";

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  product: { name: string, quantity: number, isComplete: boolean };
  newItemPlaceHolder: string;
  submitButtonText: string;
  productQuantityLabel: string;
  shopListIndex: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shopListProvider: ShopListProvider) {
    this.product = {
      name: '',
      quantity: 1,
      isComplete: false,
    };
    this.newItemPlaceHolder = 'Add product';
    this.submitButtonText = 'Add new product';
    this.productQuantityLabel = 'Product quantity';
    this.shopListIndex = this.navParams.get('shopListIndex');
  }
  ionViewDidLoad() {
  }
  decreaseValue() {
    this.product.quantity ? this.product.quantity -- : '';
  }
  increaseValue() {
    this.product.quantity ++;
  }
  addNewProduct() {
    this.shopListProvider.addNewProduct({ product: this.product, shopListIndex: this.shopListIndex });
    this.navCtrl.pop();
  }

}
