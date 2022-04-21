import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeSearchPage } from './notice-search.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeSearchPageRoutingModule {}
