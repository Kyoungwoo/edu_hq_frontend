import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEducationListPage } from './my-education-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyEducationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEducationListPageRoutingModule {}
