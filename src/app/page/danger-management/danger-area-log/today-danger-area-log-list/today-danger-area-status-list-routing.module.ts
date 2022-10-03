import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayDangerAreaStatusListPage } from './today-danger-area-status-list.page';

const routes: Routes = [
  {
    path: '',
    component: TodayDangerAreaStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayDangerAreaStatusListPageRoutingModule {}
