import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyDeviceListPageRoutingModule } from './heavy-device-list-routing.module';

import { HeavyDeviceListPage } from './heavy-device-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    HeavyDeviceListPageRoutingModule
  ],
  declarations: [HeavyDeviceListPage]
})
export class HeavyDeviceListPageModule {}
