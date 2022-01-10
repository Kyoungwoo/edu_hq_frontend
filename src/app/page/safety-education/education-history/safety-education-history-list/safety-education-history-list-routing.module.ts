import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationHistoryListPage } from './safety-education-history-list.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationHistoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationHistoryListPageRoutingModule {}
