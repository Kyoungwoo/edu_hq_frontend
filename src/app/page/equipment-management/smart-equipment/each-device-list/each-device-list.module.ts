import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EachDeviceListPageRoutingModule } from './each-device-list-routing.module';

import { EachDeviceListPage } from './each-device-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { EachDeviceDetailSearchPageModule } from '../each-device-detail-search/each-device-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    EachDeviceListPageRoutingModule,
    EachDeviceDetailSearchPageModule
  ],
  declarations: [EachDeviceListPage]
})
export class EachDeviceListPageModule {}
