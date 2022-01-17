import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskEvaluationEditPageRoutingModule } from './risk-evaluation-edit-routing.module';

import { RiskEvaluationEditPage } from './risk-evaluation-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { RiskEvaluationPopupPageModule } from '../risk-evaluation-popup/risk-evaluation-popup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    RiskEvaluationEditPageRoutingModule,
    RiskEvaluationPopupPageModule
  ],
  declarations: [RiskEvaluationEditPage]
})
export class RiskEvaluationEditPageModule {}
