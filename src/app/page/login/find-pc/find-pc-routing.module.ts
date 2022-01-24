import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPcPage } from './find-pc.page';

const routes: Routes = [
  {
    path: '',
    component: FindPcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPcPageRoutingModule {}
