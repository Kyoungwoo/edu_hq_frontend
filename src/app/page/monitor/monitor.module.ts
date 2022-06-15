import { MonitorCctvEditPageModule } from './monitor-cctv-edit/monitor-cctv-edit.module';
import { MonitorCctvListPageModule } from './monitor-cctv-list/monitor-cctv-list.module';
import { MonitorSmartEquipEditPageModule } from './monitor-smart-equip-edit/monitor-smart-equip-edit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorPageRoutingModule } from './monitor-routing.module';

import { MonitorPage } from './monitor.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MonitorWorkerLocationPageModule } from './monitor-worker-location/monitor-worker-location.module';
import { TodayDepartureStatusListPageModule } from '../work-management/departure-status/today-departure-status-list/today-departure-status-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorPageRoutingModule,
    MonitorWorkerLocationPageModule,
    MonitorSmartEquipEditPageModule,
    MonitorCctvListPageModule,
    MonitorCctvEditPageModule,
    TodayDepartureStatusListPageModule
  ],
  declarations: [MonitorPage]
})
export class MonitorPageModule {}
