import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorRealtimeLocationPageRoutingModule } from './monitor-realtime-location-routing.module';

import { MonitorRealtimeLocationPage } from './monitor-realtime-location.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorRealtimeLocationPageRoutingModule
  ],
  declarations: [MonitorRealtimeLocationPage]
})
export class MonitorRealtimeLocationPageModule {}
