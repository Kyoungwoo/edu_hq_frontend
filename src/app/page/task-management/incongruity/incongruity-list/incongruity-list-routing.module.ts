import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncongruityListPage } from './incongruity-list.page';

const routes: Routes = [
  {
    path: '',
    component: IncongruityListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncongruityListPageRoutingModule {}
