import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorCctvEditPage } from './monitor-cctv-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorCctvEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorCctvEditPageRoutingModule {}
