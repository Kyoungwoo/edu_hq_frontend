import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualDetailSearchPage } from './manual-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: ManualDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualDetailSearchPageRoutingModule {}
