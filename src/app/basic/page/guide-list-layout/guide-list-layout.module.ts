import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideListLayoutPageRoutingModule } from './guide-list-layout-routing.module';

import { GuideListLayoutPage } from './guide-list-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideListLayoutPageRoutingModule
  ],
  declarations: [GuideListLayoutPage]
})
export class GuideListLayoutPageModule {}
