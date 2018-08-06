import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { NewListModalPage } from '../new-list-modal/new-list-modal';
import { ShopListDetailsPage } from "../shop-list-details/shop-list-details";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shopLists: any;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private databaseService: DatabaseService) {
    this.shopLists = this.databaseService.getShopLists();
  }
  createNewShopList() {
    let newListModal = this.modalCtrl.create(NewListModalPage);
    newListModal.present();
  }
  ionViewWillEnter() {
  }
  openShopList(list) {
    this.navCtrl.push(ShopListDetailsPage,{ 'shopList': list });
  }
}
