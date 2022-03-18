import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsdsEditPage } from './msds-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MsdsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsdsEditPageRoutingModule {}
