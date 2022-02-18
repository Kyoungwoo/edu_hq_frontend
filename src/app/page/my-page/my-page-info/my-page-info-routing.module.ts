import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageInfoPage } from './my-page-info.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageInfoPageRoutingModule {}
