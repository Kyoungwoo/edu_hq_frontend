import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmDetailSearchPage } from './tbm-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: TbmDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmDetailSearchPageRoutingModule {}
