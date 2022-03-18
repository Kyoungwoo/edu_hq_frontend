import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPendingListPage } from './confirm-pending-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPendingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPendingListPageRoutingModule {}
