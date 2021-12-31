import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCcListPage } from './confirm-cc-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCcListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCcListPageRoutingModule {}
