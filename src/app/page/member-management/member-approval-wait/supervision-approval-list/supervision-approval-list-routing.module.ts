import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionApprovalListPage } from './supervision-approval-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionApprovalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionApprovalListPageRoutingModule {}
