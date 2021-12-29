import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyDeviceListPage } from './heavy-device-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyDeviceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyDeviceListPageRoutingModule {}
