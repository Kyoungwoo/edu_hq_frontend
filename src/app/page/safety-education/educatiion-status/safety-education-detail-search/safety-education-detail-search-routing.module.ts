import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationDetailSearchPage } from './safety-education-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationDetailSearchPageRoutingModule {}
