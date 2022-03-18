import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageMileagePageRoutingModule } from './my-page-mileage-routing.module';

import { MyPageMileagePage } from './my-page-mileage.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MyPageMileagePageRoutingModule
  ],
  declarations: [MyPageMileagePage]
})
export class MyPageMileagePageModule {}
