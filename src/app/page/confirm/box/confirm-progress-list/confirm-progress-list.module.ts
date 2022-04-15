import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmProgressListPageRoutingModule } from './confirm-progress-list-routing.module';

import { ConfirmProgressListPage } from './confirm-progress-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ConfirmProgressDetailSearchPageModule } from '../confirm-progress-detail-search/confirm-progress-detail-search.module';
import { SafetyEducationResultEditPageModule } from 'src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module';
import { RiskEvaluationEditPageModule } from 'src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module';
import { WorkerMinutesEditPageModule } from 'src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmProgressListPageRoutingModule,
    ConfirmProgressDetailSearchPageModule,
    SafetyEducationResultEditPageModule,
    RiskEvaluationEditPageModule,
    WorkerMinutesEditPageModule
  ],
  declarations: [ConfirmProgressListPage]
})
export class ConfirmProgressListPageModule {}
