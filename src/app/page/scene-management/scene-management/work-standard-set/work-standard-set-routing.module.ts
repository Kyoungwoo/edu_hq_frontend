import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkStandardSetPage } from './work-standard-set.page';

const routes: Routes = [
  {
    path: '',
    component: WorkStandardSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkStandardSetPageRoutingModule {}
