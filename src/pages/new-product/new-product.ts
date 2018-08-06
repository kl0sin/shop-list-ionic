import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseService } from "../../services/database.service";

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
  shopListKey: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseService: DatabaseService) {
    this.product = {
      name: '',
      quantity: 1,
      isComplete: false,
    };
    this.newItemPlaceHolder = 'Add product';
    this.submitButtonText = 'Add new product';
    this.productQuantityLabel = 'Product quantity';
    this.shopListKey = this.navParams.get('shopListKey');
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
    this.databaseService.addNewProduct({ product: this.product, shopListKey: this.shopListKey })
      .then(
        () => this.navCtrl.pop(),
        error => console.log(error.message)
      );
    // this.shopListProvider.addNewProduct({ product: this.product, shopListIndex: this.shopListIndex });
    // this.navCtrl.pop();
  }

}
