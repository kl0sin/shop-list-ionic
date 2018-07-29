import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListItemPage } from './shop-list-item';

@NgModule({
  declarations: [
    ShopListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopListItemPage),
  ],
})
export class ShopListItemPageModule {}
