import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSearchPage } from './detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSearchPageRoutingModule {}
