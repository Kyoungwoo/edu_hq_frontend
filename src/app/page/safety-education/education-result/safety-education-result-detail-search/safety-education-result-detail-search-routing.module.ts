import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationResultDetailSearchPage } from './safety-education-result-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationResultDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationResultDetailSearchPageRoutingModule {}
