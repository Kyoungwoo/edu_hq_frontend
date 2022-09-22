import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraneAccessDetailPage } from './crane-access-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CraneAccessDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraneAccessDetailPageRoutingModule {}
