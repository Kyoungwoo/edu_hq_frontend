import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EachDeviceAddPageRoutingModule } from './each-device-add-routing.module';

import { EachDeviceAddPage } from './each-device-add.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    EachDeviceAddPageRoutingModule
  ],
  declarations: [EachDeviceAddPage]
})
export class EachDeviceAddPageModule {}
