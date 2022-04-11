import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorRealtimeLocationPage } from './monitor-realtime-location.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorRealtimeLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRealtimeLocationPageRoutingModule {}
