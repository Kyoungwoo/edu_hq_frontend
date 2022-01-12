import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionInfoEditPage } from './supervision-info-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionInfoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionInfoEditPageRoutingModule {}
