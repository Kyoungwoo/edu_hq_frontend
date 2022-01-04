import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskEvaluationEditPage } from './risk-evaluation-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RiskEvaluationEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskEvaluationEditPageRoutingModule {}
