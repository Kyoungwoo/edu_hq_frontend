import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideListLayoutPage } from './guide-list-layout.page';

const routes: Routes = [
  {
    path: '',
    component: GuideListLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideListLayoutPageRoutingModule {}
