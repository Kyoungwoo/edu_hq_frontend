import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialNoListPage } from './serial-no-list.page';

const routes: Routes = [
  {
    path: '',
    component: SerialNoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerialNoListPageRoutingModule {}
