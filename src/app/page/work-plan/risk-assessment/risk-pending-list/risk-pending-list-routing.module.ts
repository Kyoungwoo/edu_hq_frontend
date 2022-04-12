import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskPendingListPage } from './risk-pending-list.page';

const routes: Routes = [
  {
    path: '',
    component: RiskPendingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskPendingListPageRoutingModule {}
