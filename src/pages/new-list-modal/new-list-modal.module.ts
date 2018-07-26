import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewListModalPage } from './new-list-modal';

@NgModule({
  declarations: [
    NewListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewListModalPage),
  ],
})
export class NewListModalPageModule {}
