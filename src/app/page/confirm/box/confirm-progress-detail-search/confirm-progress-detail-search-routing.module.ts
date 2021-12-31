import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmProgressDetailSearchPage } from './confirm-progress-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmProgressDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmProgressDetailSearchPageRoutingModule {}
