import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerMinutesListPage } from './worker-minutes-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerMinutesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerMinutesListPageRoutingModule {}
