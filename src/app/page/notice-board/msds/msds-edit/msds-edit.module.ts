import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsEditPageRoutingModule } from './msds-edit-routing.module';

import { MsdsEditPage } from './msds-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsdsEditPageRoutingModule
  ],
  declarations: [MsdsEditPage]
})
export class MsdsEditPageModule {}
