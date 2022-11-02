import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtwEditPageRoutingModule } from './ptw-edit-routing.module';
import { PtwEditPage } from './ptw-edit.page';
import { PtwRiskEvaluationPageModule } from '../ptw-risk-evaluation/ptw-risk-evaluation.module';

import { ComponentModule } from 'src/app/component/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PtwEditPageRoutingModule,
    PtwRiskEvaluationPageModule
  ],
  declarations: [PtwEditPage]
})
export class PtwEditPageModule {}