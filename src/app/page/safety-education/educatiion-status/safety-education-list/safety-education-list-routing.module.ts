import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationListPage } from './safety-education-list.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationListPageRoutingModule {}
