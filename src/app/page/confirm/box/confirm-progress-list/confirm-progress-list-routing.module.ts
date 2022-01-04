import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmProgressListPage } from './confirm-progress-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmProgressListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmProgressListPageRoutingModule {}
