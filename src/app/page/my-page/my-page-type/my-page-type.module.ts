import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageTypePageRoutingModule } from './my-page-type-routing.module';

import { MyPageTypePage } from './my-page-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPageTypePageRoutingModule
  ],
  declarations: [MyPageTypePage]
})
export class MyPageTypePageModule {}
