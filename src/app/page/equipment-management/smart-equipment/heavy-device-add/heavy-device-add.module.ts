import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyDeviceAddPageRoutingModule } from './heavy-device-add-routing.module';

import { HeavyDeviceAddPage } from './heavy-device-add.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    HeavyDeviceAddPageRoutingModule
  ],
  declarations: [HeavyDeviceAddPage]
})
export class HeavyDeviceAddPageModule {}
