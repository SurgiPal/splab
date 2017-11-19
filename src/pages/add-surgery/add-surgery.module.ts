import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSurgeryPage } from './add-surgery';

@NgModule({
  declarations: [
    AddSurgeryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSurgeryPage),
  ],
})
export class AddSurgeryPageModule {}
