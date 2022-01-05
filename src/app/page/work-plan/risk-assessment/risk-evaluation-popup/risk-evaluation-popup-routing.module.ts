import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskEvaluationPopupPage } from './risk-evaluation-popup.page';

const routes: Routes = [
  {
    path: '',
    component: RiskEvaluationPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskEvaluationPopupPageRoutingModule {}
