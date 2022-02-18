import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageEducationPage } from './my-page-education.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageEducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageEducationPageRoutingModule {}
