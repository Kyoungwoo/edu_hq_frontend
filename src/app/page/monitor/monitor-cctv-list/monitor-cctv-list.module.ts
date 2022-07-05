import { ComponentModule } from './../../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorCctvListPageRoutingModule } from './monitor-cctv-list-routing.module';

import { MonitorCctvListPage } from './monitor-cctv-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorCctvListPageRoutingModule
  ],
  declarations: [MonitorCctvListPage]
})
export class MonitorCctvListPageModule {}
