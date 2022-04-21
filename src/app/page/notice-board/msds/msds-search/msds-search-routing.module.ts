import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsdsSearchPage } from './msds-search.page';

const routes: Routes = [
  {
    path: '',
    component: MsdsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsdsSearchPageRoutingModule {}
