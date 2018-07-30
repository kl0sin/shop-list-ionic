import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  item: { name: string, quantity: number };
  newItemPlaceHolder: string;
  submitButtonText: string;
  productQuantityLabel: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.item = {
        name: '',
        quantity: 0,
    };
    this.newItemPlaceHolder = 'Add product';
    this.submitButtonText = 'Add new product';
    this.productQuantityLabel = 'Product quantity';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewItemPage');
  }
  decreaseValue() {
    this.item.quantity ? this.item.quantity -- : '';
  }
  increaseValue() {
    this.item.quantity ++;
  }
  addNewProduct() {
    console.log('addNewProduct');
  }

}
