import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDetailSearchPage } from './my-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: MyDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDetailSearchPageRoutingModule {}
