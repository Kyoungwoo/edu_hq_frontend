import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationSelectPage } from './organization-select.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizationSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationSelectPageRoutingModule {}
