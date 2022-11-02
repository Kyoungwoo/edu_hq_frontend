import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerDetailSearchPage } from './danger-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: DangerDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerDetailSearchPageRoutingModule {}
