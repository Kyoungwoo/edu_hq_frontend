import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideDetailLayoutPageRoutingModule } from './guide-detail-layout-routing.module';

import { GuideDetailLayoutPage } from './guide-detail-layout.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideDetailLayoutPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [GuideDetailLayoutPage]
})
export class GuideDetailLayoutPageModule {}
