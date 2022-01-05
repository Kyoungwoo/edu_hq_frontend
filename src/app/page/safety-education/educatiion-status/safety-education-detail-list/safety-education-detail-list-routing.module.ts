import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationDetailListPage } from './safety-education-detail-list.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationDetailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationDetailListPageRoutingModule {}
