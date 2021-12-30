import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStatusListPage } from './my-status-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyStatusListPageRoutingModule {}
