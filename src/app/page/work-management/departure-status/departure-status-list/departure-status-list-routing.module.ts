import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartureStatusListPage } from './departure-status-list.page';

const routes: Routes = [
  {
    path: '',
    component: DepartureStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartureStatusListPageRoutingModule {}
