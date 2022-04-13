import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmObtainListPageRoutingModule } from './confirm-obtain-list-routing.module';

import { ConfirmObtainListPage } from './confirm-obtain-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ConfirmObtainDetailSearchPageModule } from '../confirm-obtain-detail-search/confirm-obtain-detail-search.module';
import { WorkerMinutesEditPageModule } from 'src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module';
import { SafetyEducationResultEditPageModule } from 'src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module';
import { RiskEvaluationEditPageModule } from 'src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmObtainListPageRoutingModule,
    ConfirmObtainDetailSearchPageModule,
    SafetyEducationResultEditPageModule,
    RiskEvaluationEditPageModule,
    WorkerMinutesEditPageModule,
  ],
  declarations: [ConfirmObtainListPage]
})
export class ConfirmObtainListPageModule {}
