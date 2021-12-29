import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerStatusListPage } from './worker-status-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerStatusListPageRoutingModule {}
