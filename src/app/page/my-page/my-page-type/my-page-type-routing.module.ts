import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageTypePage } from './my-page-type.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageTypePageRoutingModule {}
