import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerMinutesPendingListPage } from './worker-minutes-pending-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerMinutesPendingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerMinutesPendingListPageRoutingModule {}
