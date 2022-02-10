import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualDetailPage } from './manual-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ManualDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualDetailPageRoutingModule {}
