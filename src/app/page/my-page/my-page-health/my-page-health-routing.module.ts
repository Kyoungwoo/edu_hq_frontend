import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageHealthPage } from './my-page-health.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageHealthPageRoutingModule {}
