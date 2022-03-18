import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsdsListPage } from './msds-list.page';

const routes: Routes = [
  {
    path: '',
    component: MsdsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsdsListPageRoutingModule {}
