import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosedEnvironmentInfoDetailPage } from './closed-environment-info-management-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedEnvironmentInfoDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosedEnvironmentInfoDetailPageRoutingModule {}
