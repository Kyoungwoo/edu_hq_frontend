import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaAddPage } from './area-add.page';

const routes: Routes = [
  {
    path: '',
    component: AreaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaAddPageRoutingModule {}
