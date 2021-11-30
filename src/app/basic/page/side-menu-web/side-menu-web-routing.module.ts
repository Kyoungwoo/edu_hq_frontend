import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuWebPage } from './side-menu-web.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuWebPageRoutingModule {}
