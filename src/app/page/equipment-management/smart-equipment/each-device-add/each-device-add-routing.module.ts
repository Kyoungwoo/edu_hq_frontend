import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EachDeviceAddPage } from './each-device-add.page';

const routes: Routes = [
  {
    path: '',
    component: EachDeviceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EachDeviceAddPageRoutingModule {}
