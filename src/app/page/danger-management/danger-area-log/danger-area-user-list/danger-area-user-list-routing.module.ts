import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaUserListPage } from './danger-area-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaUserListPageRoutingModule {}
