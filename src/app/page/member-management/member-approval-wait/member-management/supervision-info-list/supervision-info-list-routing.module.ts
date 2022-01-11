import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionInfoListPage } from './supervision-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionInfoListPageRoutingModule {}
