import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorWorkerLocationPage } from './monitor-worker-location.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorWorkerLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorWorkerLocationPageRoutingModule {}
