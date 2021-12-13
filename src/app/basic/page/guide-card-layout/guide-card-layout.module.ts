import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideCardLayoutPageRoutingModule } from './guide-card-layout-routing.module';

import { GuideCardLayoutPage } from './guide-card-layout.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideCardLayoutPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [GuideCardLayoutPage]
})
export class GuideCardLayoutPageModule {}
