import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualListPage } from './manual-list.page';

const routes: Routes = [
  {
    path: '',
    component: ManualListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualListPageRoutingModule {}
