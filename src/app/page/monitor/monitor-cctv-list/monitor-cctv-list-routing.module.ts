import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorCctvListPage } from './monitor-cctv-list.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorCctvListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorCctvListPageRoutingModule {}
