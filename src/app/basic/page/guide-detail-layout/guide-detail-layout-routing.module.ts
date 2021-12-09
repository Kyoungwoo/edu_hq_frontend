import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideDetailLayoutPage } from './guide-detail-layout.page';

const routes: Routes = [
  {
    path: '',
    component: GuideDetailLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideDetailLayoutPageRoutingModule {}
