import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationConfirmPendingListPage } from './education-confirm-pending-list.page';

const routes: Routes = [
  {
    path: '',
    component: EducationConfirmPendingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationConfirmPendingListPageRoutingModule {}
