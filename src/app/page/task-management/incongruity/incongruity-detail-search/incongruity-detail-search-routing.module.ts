import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncongruityDetailSearchPage } from './incongruity-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: IncongruityDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncongruityDetailSearchPageRoutingModule {}
