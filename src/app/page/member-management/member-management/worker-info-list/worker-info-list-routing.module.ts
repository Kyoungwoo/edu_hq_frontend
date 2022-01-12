import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerInfoListPage } from './worker-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerInfoListPageRoutingModule {}
