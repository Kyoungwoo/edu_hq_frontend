import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhEditPage } from './lh-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LhEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhEditPageRoutingModule {}
