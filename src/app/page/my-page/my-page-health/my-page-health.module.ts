import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPageHealthPageRoutingModule } from './my-page-health-routing.module';

import { MyPageHealthPage } from './my-page-health.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPageHealthPageRoutingModule
  ],
  declarations: [MyPageHealthPage]
})
export class MyPageHealthPageModule {}
