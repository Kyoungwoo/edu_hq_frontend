import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemStandardSetPage } from './system-standard-set.page';

const routes: Routes = [
  {
    path: '',
    component: SystemStandardSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemStandardSetPageRoutingModule {}
