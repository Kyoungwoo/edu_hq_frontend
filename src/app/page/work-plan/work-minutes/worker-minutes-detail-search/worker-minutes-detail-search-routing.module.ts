import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerMinutesDetailSearchPage } from './worker-minutes-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerMinutesDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerMinutesDetailSearchPageRoutingModule {}
