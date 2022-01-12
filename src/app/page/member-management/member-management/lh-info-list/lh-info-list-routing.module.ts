import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhInfoListPage } from './lh-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: LhInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhInfoListPageRoutingModule {}
