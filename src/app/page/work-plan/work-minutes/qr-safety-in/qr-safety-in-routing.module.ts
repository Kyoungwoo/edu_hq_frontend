import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrSafetyInPage } from './qr-safety-in.page';

const routes: Routes = [
  {
    path: '',
    component: QrSafetyInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrSafetyInPageRoutingModule {}
