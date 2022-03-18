import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationHistoryDetailPage } from './safety-education-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationHistoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationHistoryDetailPageRoutingModule {}
