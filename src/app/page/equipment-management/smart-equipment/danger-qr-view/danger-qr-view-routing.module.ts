import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerQrViewPage } from './danger-qr-view.page';

const routes: Routes = [
  {
    path: '',
    component: DangerQrViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerQrViewPageRoutingModule {}
