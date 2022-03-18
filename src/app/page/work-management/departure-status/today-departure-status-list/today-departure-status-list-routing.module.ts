import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayDepartureStatusListPage } from './today-departure-status-list.page';

const routes: Routes = [
  {
    path: '',
    component: TodayDepartureStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayDepartureStatusListPageRoutingModule {}
