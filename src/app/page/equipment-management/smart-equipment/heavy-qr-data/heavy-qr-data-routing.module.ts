import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyQrDataPage } from './heavy-qr-data.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyQrDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyQrDataPageRoutingModule {}
