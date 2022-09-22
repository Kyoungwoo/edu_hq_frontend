import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosedEnvironmentInfoListPage } from './closed-environment-info-management-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedEnvironmentInfoListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosedEnvironmentInfoListPageRoutingModule {}
