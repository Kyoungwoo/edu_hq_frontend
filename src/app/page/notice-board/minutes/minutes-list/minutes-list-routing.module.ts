import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinutesListPage } from './minutes-list.page';

const routes: Routes = [
  {
    path: '',
    component: MinutesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinutesListPageRoutingModule {}
