import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoniterPageRoutingModule } from './moniter-routing.module';

import { MoniterPage } from './moniter.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { RiskEvaluationPopupPageModule } from '../work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MoniterPageRoutingModule,
    RiskEvaluationPopupPageModule,
  ],
  declarations: [MoniterPage]
})
export class MoniterPageModule {}
