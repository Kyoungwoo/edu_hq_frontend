import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhListPage } from './lh-list.page';

const routes: Routes = [
  {
    path: '',
    component: LhListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhListPageRoutingModule {}
