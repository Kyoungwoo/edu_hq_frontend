import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkMyDetailPage } from './work-my-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkMyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkMyDetailPageRoutingModule {}
