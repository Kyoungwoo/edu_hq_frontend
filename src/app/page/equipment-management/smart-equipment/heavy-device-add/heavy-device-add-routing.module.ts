import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyDeviceAddPage } from './heavy-device-add.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyDeviceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyDeviceAddPageRoutingModule {}
