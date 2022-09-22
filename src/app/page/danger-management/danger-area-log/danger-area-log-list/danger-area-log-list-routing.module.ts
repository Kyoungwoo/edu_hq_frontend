import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaLogListPage } from './danger-area-log-list.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaLogListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaLogListPageRoutingModule {}
