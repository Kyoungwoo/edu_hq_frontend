import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalEditPage } from './approval-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalEditPageRoutingModule {}
