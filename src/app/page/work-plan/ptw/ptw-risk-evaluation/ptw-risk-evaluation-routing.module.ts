import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtwRiskEvaluationPage } from './ptw-risk-evaluation.page';

const routes: Routes = [
  {
    path: '',
    component: PtwRiskEvaluationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtwRiskEvaluationPageRoutingModule {}
