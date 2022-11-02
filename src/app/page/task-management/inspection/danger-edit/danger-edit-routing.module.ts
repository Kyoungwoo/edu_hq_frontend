import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerEditPage } from './danger-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DangerEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerEditPageRoutingModule {}
