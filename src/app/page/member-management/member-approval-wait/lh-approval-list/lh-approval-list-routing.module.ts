import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhApprovalListPage } from './lh-approval-list.page';

const routes: Routes = [
  {
    path: '',
    component: LhApprovalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhApprovalListPageRoutingModule {}
