import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorEditPage } from './contractor-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorEditPageRoutingModule {}
