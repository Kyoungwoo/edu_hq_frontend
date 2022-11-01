import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmWorkerPage } from './tbm-worker.page';

const routes: Routes = [
  {
    path: '',
    component: TbmWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmWorkerPageRoutingModule {}
