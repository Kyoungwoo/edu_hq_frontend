import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskEvaluationConfirmPage } from './risk-evaluation-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RiskEvaluationConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskEvaluationConfirmPageRoutingModule {}
