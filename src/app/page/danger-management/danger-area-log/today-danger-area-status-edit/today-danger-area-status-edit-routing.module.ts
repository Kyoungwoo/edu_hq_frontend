import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayDangerAreaStatusEditPage } from './today-danger-area-status-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TodayDangerAreaStatusEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayDangerAreaStatusEditPageRoutingModule {}
