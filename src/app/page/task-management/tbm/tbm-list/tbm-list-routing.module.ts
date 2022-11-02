import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmListPage } from './tbm-list.page';

const routes: Routes = [
  {
    path: '',
    component: TbmListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmListPageRoutingModule {}
