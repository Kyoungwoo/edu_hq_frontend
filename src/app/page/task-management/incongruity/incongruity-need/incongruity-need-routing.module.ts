import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncongruityNeedPage } from './incongruity-need.page';

const routes: Routes = [
  {
    path: '',
    component: IncongruityNeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncongruityNeedPageRoutingModule {}
