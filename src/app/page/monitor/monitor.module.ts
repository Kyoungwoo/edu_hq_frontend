import { MonitorSmartEquipEditPageModule } from './monitor-smart-equip-edit/monitor-smart-equip-edit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorPageRoutingModule } from './monitor-routing.module';

import { MonitorPage } from './monitor.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { RiskEvaluationPopupPageModule } from '../work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MonitorPageRoutingModule,
    RiskEvaluationPopupPageModule,
    MonitorSmartEquipEditPageModule
  ],
  declarations: [MonitorPage]
})
export class MonitorPageModule {}
