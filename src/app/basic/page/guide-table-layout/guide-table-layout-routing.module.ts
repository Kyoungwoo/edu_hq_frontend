import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideTableLayoutPage } from './guide-table-layout.page';

const routes: Routes = [
  {
    path: '',
    component: GuideTableLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideTableLayoutPageRoutingModule {}
