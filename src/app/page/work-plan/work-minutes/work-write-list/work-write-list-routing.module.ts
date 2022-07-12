import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWriteListPage } from './work-write-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkWriteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkWriteListPageRoutingModule {}
