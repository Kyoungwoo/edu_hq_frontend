import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerApprovalEditPage } from './partner-approval-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerApprovalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerApprovalEditPageRoutingModule {}
