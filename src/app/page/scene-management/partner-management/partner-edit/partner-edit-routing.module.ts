import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerEditPage } from './partner-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerEditPageRoutingModule {}
