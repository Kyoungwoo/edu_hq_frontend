import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsdsPage } from './msds.page';

const routes: Routes = [
  {
    path: '',
    component: MsdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsdsPageRoutingModule {}
