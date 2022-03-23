import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorSmartEquipEditPageRoutingModule } from './monitor-smart-equip-edit-routing.module';

import { MonitorSmartEquipEditPage } from './monitor-smart-equip-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorSmartEquipEditPageRoutingModule
  ],
  declarations: [MonitorSmartEquipEditPage]
})
export class MonitorSmartEquipEditPageModule {}
