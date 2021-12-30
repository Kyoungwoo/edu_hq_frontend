import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EachDeviceDetailSearchPage } from './each-device-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: EachDeviceDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EachDeviceDetailSearchPageRoutingModule {}
