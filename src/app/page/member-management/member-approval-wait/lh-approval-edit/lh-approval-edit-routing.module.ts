import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhApprovalEditPage } from './lh-approval-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LhApprovalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhApprovalEditPageRoutingModule {}
