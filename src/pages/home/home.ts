import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { NewListModalPage } from '../new-list-modal/new-list-modal';
import { ShopListProvider } from "../../providers/shop-list/shop-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shopLists: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private shopListProvider: ShopListProvider) {

  }

  createNewShopList() {
    let newListModal = this.modalCtrl.create(NewListModalPage);
    newListModal.present();
  }
  ionViewWillEnter() {
    this.shopLists = this.shopListProvider.getShopLists();
  }

}
