import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionApprovalEditPage } from './supervision-approval-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionApprovalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionApprovalEditPageRoutingModule {}
