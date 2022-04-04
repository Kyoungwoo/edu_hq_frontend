import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyQrViewPage } from './heavy-qr-view.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyQrViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyQrViewPageRoutingModule {}
