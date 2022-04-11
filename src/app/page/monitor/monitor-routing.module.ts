import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorPage } from './monitor.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorPage
  },
  {
    path: 'monitor-smart-equip-edit',
    loadChildren: () => import('./monitor-smart-equip-edit/monitor-smart-equip-edit.module').then( m => m.MonitorSmartEquipEditPageModule)
  },  {
    path: 'monitor-realtime-location',
    loadChildren: () => import('./monitor-realtime-location/monitor-realtime-location.module').then( m => m.MonitorRealtimeLocationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorPageRoutingModule {}
