import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtwEditPage } from './ptw-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PtwEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtwEditPageRoutingModule {}
