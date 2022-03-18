import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmObtainListPage } from './confirm-obtain-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmObtainListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmObtainListPageRoutingModule {}
