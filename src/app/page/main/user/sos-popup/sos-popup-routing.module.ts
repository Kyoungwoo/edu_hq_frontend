import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosPopupPage } from './sos-popup.page';

const routes: Routes = [
  {
    path: '',
    component: SosPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosPopupPageRoutingModule {}
