import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionEditPage } from './supervision-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionEditPageRoutingModule {}
