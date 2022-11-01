import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyDetailSearchPage } from './daily-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: DailyDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyDetailSearchPageRoutingModule {}
