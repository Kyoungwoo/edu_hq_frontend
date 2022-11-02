import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentListPage } from './accident-list.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentListPageRoutingModule {}
