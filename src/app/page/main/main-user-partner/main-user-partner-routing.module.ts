import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainUserPartnerPage } from './main-user-partner.page';

const routes: Routes = [
  {
    path: '',
    component: MainUserPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserPartnerPageRoutingModule {}
