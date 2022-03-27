import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerMinutesSelectTypePage } from './worker-minutes-select-type.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerMinutesSelectTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerMinutesSelectTypePageRoutingModule {}
