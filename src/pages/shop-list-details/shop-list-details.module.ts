import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListDetailsPage } from './shop-list-details';

@NgModule({
  declarations: [
    ShopListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopListDetailsPage),
  ],
})
export class ShopListItemPageModule {}
