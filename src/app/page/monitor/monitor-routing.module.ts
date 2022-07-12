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
  },
  {
    path: 'monitor-worker-location',
    loadChildren: () => import('./monitor-worker-location/monitor-worker-location.module').then( m => m.MonitorWorkerLocationPageModule)
  },
  {
    path: 'monitor-cctv-list',
    loadChildren: () => import('./monitor-cctv-list/monitor-cctv-list.module').then( m => m.MonitorCctvListPageModule)
  },
  {
    path: 'monitor-cctv-edit',
    loadChildren: () => import('./monitor-cctv-edit/monitor-cctv-edit.module').then( m => m.MonitorCctvEditPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorPageRoutingModule {}
