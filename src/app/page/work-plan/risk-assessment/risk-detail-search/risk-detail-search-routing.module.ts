import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskDetailSearchPage } from './risk-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: RiskDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskDetailSearchPageRoutingModule {}
