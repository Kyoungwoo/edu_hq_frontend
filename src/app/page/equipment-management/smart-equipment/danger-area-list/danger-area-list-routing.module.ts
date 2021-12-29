import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaListPage } from './danger-area-list.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaListPageRoutingModule {}
