import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtwRiskEvaluationPageRoutingModule } from './ptw-risk-evaluation-routing.module';
import { PtwRiskEvaluationPage } from './ptw-risk-evaluation.page';

import { ComponentModule } from 'src/app/component/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PtwRiskEvaluationPageRoutingModule,
  ],
  declarations: [PtwRiskEvaluationPage]
})
export class PtwRiskEvaluationPageModule {}