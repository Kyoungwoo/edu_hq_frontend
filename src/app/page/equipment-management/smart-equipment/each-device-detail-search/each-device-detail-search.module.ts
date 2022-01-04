import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EachDeviceDetailSearchPageRoutingModule } from './each-device-detail-search-routing.module';

import { EachDeviceDetailSearchPage } from './each-device-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    EachDeviceDetailSearchPageRoutingModule
  ],
  declarations: [EachDeviceDetailSearchPage]
})
export class EachDeviceDetailSearchPageModule {}
