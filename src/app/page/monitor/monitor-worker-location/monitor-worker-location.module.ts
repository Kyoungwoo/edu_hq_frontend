import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorWorkerLocationPageRoutingModule } from './monitor-worker-location-routing.module';

import { MonitorWorkerLocationPage } from './monitor-worker-location.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorWorkerLocationPageRoutingModule
  ],
  declarations: [MonitorWorkerLocationPage],
  exports: [MonitorWorkerLocationPage]
})
export class MonitorWorkerLocationPageModule {}
