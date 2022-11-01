import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorWarningPage } from './monitor-warning.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorWarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorWarningPageRoutingModule {}
