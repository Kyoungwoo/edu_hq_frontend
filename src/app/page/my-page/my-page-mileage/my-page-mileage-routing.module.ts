import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageMileagePage } from './my-page-mileage.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageMileagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageMileagePageRoutingModule {}
