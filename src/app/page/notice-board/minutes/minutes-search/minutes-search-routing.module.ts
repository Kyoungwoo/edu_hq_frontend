import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinutesSearchPage } from './minutes-search.page';

const routes: Routes = [
  {
    path: '',
    component: MinutesSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinutesSearchPageRoutingModule {}
