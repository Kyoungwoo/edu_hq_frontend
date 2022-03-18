import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerInfoEditPage } from './worker-info-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerInfoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerInfoEditPageRoutingModule {}
