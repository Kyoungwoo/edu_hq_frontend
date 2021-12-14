import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoniterPage } from './moniter.page';

const routes: Routes = [
  {
    path: '',
    component: MoniterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoniterPageRoutingModule {}
