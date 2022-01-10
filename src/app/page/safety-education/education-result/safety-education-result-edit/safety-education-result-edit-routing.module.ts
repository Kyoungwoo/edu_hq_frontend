import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyEducationResultEditPage } from './safety-education-result-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyEducationResultEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyEducationResultEditPageRoutingModule {}
