import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyDeviceListPageRoutingModule } from './heavy-device-list-routing.module';

import { HeavyDeviceListPage } from './heavy-device-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { HeavyDeviceDetailSearchPage } from '../heavy-device-detail-search/heavy-device-detail-search.page';
import { HeavyDeviceDetailSearchPageModule } from '../heavy-device-detail-search/heavy-device-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    HeavyDeviceListPageRoutingModule,
    HeavyDeviceDetailSearchPageModule
  ],
  declarations: [HeavyDeviceListPage]
})
export class HeavyDeviceListPageModule {}
