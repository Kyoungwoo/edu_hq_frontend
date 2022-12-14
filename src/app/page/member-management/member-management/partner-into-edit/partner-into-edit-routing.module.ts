import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerIntoEditPage } from './partner-into-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerIntoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerIntoEditPageRoutingModule {}
