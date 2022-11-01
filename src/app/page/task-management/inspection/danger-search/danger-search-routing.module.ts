import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerSearchPage } from './danger-search.page';

const routes: Routes = [
  {
    path: '',
    component: DangerSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerSearchPageRoutingModule {}
