import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationResultListPage } from './safety-education-result-list.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationResultListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationResultListPageRoutingModule {}
