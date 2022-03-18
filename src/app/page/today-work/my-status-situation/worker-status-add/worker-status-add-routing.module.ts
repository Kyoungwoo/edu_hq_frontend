import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerStatusAddPage } from './worker-status-add.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerStatusAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerStatusAddPageRoutingModule {}
