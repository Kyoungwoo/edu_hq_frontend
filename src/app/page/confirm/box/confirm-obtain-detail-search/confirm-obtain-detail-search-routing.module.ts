import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmObtainDetailSearchPage } from './confirm-obtain-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmObtainDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmObtainDetailSearchPageRoutingModule {}
