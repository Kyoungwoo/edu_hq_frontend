import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideCardLayoutPage } from './guide-card-layout.page';

const routes: Routes = [
  {
    path: '',
    component: GuideCardLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideCardLayoutPageRoutingModule {}
