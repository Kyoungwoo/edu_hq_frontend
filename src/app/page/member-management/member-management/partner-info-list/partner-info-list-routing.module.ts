import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerInfoListPage } from './partner-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerInfoListPageRoutingModule {}
