import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWriteSearchPage } from './work-write-search.page';

const routes: Routes = [
  {
    path: '',
    component: WorkWriteSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkWriteSearchPageRoutingModule {}
