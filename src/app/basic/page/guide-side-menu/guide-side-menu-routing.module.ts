import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideSideMenuPage } from './guide-side-menu.page';

const routes: Routes = [
  {
    path: '',
    component: GuideSideMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideSideMenuPageRoutingModule {}
