import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyStatusEditPageRoutingModule } from './my-status-edit-routing.module';

import { MyStatusEditPage } from './my-status-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyStatusEditPageRoutingModule
  ],
  declarations: [MyStatusEditPage]
})
export class MyStatusEditPageModule {}
