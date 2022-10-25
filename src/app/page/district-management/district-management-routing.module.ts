import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictManagementPage } from './district-management.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictManagementPageRoutingModule {}
