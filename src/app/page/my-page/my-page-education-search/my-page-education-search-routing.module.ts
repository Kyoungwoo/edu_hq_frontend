import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageEducationSearchPage } from './my-page-education-search.page';

const routes: Routes = [
  {
    path: '',
    component: MyPageEducationSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageEducationSearchPageRoutingModule {}
