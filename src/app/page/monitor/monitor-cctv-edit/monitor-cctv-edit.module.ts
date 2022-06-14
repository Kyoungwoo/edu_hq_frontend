import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorCctvEditPageRoutingModule } from './monitor-cctv-edit-routing.module';

import { MonitorCctvEditPage } from './monitor-cctv-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorCctvEditPageRoutingModule
  ],
  declarations: [MonitorCctvEditPage]
})
export class MonitorCctvEditPageModule {}
