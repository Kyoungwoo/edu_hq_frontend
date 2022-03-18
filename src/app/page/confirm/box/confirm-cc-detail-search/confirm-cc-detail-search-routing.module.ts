import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCcDetailSearchPage } from './confirm-cc-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCcDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCcDetailSearchPageRoutingModule {}
