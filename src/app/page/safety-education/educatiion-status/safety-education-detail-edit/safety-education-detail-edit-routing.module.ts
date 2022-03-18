import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationDetailEditPage } from './safety-education-detail-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationDetailEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationDetailEditPageRoutingModule {}
