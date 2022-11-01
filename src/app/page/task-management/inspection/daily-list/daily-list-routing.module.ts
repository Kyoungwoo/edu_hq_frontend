import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyListPage } from './daily-list.page';

const routes: Routes = [
  {
    path: '',
    component: DailyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyListPageRoutingModule {}
