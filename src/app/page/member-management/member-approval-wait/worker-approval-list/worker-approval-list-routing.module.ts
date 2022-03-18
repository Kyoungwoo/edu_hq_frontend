import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerApprovalListPage } from './worker-approval-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerApprovalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerApprovalListPageRoutingModule {}
