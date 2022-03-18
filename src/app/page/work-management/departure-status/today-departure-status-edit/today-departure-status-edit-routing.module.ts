import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayDepartureStatusEditPage } from './today-departure-status-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TodayDepartureStatusEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayDepartureStatusEditPageRoutingModule {}
