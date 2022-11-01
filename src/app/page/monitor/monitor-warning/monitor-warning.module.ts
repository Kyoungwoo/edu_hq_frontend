import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { MonitorWarningPageRoutingModule } from './monitor-warning-routing.module';
import { MonitorWarningPage } from './monitor-warning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorWarningPageRoutingModule,
  ],
  declarations: [MonitorWarningPage]
})
export class MonitorWarningPageModule {}