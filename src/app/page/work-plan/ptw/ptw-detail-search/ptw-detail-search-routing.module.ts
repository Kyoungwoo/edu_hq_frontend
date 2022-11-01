import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtwDetailSearchPage } from './ptw-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: PtwDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtwDetailSearchPageRoutingModule {}
