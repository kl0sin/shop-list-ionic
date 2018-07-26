import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { ShopListProvider} from "../../providers/shop-list/shop-list";

@IonicPage()
@Component({
  selector: 'page-new-list-modal',
  templateUrl: 'new-list-modal.html',
})
export class NewListModalPage {
  listName: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private shopListProvider:ShopListProvider) {

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  addNewShopList() {
    this.shopListProvider.addNewList(this.listName);
    this.viewCtrl.dismiss();
  }

}
