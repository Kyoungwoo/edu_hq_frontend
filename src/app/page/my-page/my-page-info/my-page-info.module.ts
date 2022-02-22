import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageInfoPageRoutingModule } from './my-page-info-routing.module';

import { MyPageInfoPage } from './my-page-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPageInfoPageRoutingModule
  ],
  declarations: [MyPageInfoPage]
})
export class MyPageInfoPageModule {}