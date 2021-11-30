import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuAppPage } from './side-menu-app.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuAppPageRoutingModule {}
