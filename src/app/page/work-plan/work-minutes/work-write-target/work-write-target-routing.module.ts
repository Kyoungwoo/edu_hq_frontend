import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWriteTargetPage } from './work-write-target.page';

const routes: Routes = [
  {
    path: '',
    component: WorkWriteTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkWriteTargetPageRoutingModule {}
