import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorSmartEquipEditPage } from './monitor-smart-equip-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorSmartEquipEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorSmartEquipEditPageRoutingModule {}
