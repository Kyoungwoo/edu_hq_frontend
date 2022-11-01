import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerListPage } from './danger-list.page';

const routes: Routes = [
  {
    path: '',
    component: DangerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerListPageRoutingModule {}
