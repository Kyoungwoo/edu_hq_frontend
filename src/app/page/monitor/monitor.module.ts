import { MonitorSmartEquipEditPageModule } from './monitor-smart-equip-edit/monitor-smart-equip-edit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorPageRoutingModule } from './monitor-routing.module';

import { MonitorPage } from './monitor.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MonitorRealtimeLocationPage } from './monitor-realtime-location/monitor-realtime-location.page';
import { MonitorRealtimeLocationPageModule } from './monitor-realtime-location/monitor-realtime-location.module';
import { MonitorWorkerLocationPageModule } from './monitor-worker-location/monitor-worker-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorPageRoutingModule,
    MonitorWorkerLocationPageModule,
    MonitorSmartEquipEditPageModule,
    MonitorRealtimeLocationPageModule,
  ],
  declarations: [MonitorPage]
})
export class MonitorPageModule {}
