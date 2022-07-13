import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkMyListPage } from './work-my-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkMyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkMyListPageRoutingModule {}
