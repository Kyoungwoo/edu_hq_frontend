import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartDetailSearchPage } from './smart-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: SmartDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartDetailSearchPageRoutingModule {}
