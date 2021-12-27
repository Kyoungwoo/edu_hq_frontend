import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorListPage } from './contractor-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorListPageRoutingModule {}
