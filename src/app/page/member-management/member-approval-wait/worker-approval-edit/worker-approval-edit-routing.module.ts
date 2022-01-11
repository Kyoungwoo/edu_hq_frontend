import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerApprovalEditPage } from './worker-approval-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerApprovalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerApprovalEditPageRoutingModule {}
