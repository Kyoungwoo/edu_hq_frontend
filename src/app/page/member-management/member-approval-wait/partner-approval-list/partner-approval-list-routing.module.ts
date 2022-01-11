import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerApprovalListPage } from './partner-approval-list.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerApprovalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerApprovalListPageRoutingModule {}
