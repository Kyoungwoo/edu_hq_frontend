import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaAddPage } from './danger-area-add.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaAddPageRoutingModule {}
