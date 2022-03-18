import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskEvaluationConfirmPageRoutingModule } from './risk-evaluation-confirm-routing.module';

import { RiskEvaluationConfirmPage } from './risk-evaluation-confirm.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    RiskEvaluationConfirmPageRoutingModule
  ],
  declarations: [RiskEvaluationConfirmPage]
})
export class RiskEvaluationConfirmPageModule {}
