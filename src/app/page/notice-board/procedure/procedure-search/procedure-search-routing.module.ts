import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedureSearchPage } from './procedure-search.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedureSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedureSearchPageRoutingModule {}
