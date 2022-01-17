import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenDetailSearchPage } from './open-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: OpenDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenDetailSearchPageRoutingModule {}
