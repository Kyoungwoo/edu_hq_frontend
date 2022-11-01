import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtwPendingListPage } from './ptw-pending-list.page';

const routes: Routes = [
  {
    path: '',
    component: PtwPendingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtwPendingListPageRoutingModule {}
