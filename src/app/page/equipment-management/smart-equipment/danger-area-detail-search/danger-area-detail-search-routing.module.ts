import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaDetailSearchPage } from './danger-area-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaDetailSearchPageRoutingModule {}
