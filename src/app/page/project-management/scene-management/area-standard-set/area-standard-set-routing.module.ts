import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaStandardSetPage } from './area-standard-set.page';

const routes: Routes = [
  {
    path: '',
    component: AreaStandardSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaStandardSetPageRoutingModule {}
