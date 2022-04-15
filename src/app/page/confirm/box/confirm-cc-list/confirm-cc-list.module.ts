import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCcListPageRoutingModule } from './confirm-cc-list-routing.module';

import { ConfirmCcListPage } from './confirm-cc-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ConfirmCcDetailSearchPageModule } from '../confirm-cc-detail-search/confirm-cc-detail-search.module';
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
    ConfirmCcListPageRoutingModule,
    ConfirmCcDetailSearchPageModule,
    SafetyEducationResultEditPageModule,
    RiskEvaluationEditPageModule,
    WorkerMinutesEditPageModule
  ],
  declarations: [ConfirmCcListPage]
})
export class ConfirmCcListPageModule {}
