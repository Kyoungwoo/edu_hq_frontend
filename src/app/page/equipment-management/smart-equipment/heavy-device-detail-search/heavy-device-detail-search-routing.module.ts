import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyDeviceDetailSearchPage } from './heavy-device-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyDeviceDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyDeviceDetailSearchPageRoutingModule {}
