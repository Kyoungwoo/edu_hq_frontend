import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainUserWorkerPage } from './main-user-worker.page';

const routes: Routes = [
  {
    path: '',
    component: MainUserWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserWorkerPageRoutingModule {}
