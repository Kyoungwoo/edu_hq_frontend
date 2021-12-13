import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideTableLayoutPageRoutingModule } from './guide-table-layout-routing.module';

import { GuideTableLayoutPage } from './guide-table-layout.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideTableLayoutPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [GuideTableLayoutPage]
})
export class GuideTableLayoutPageModule {}
