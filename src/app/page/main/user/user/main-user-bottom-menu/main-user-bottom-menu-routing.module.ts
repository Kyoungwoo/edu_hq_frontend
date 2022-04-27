import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainUserBottomMenuPage } from './main-user-bottom-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainUserBottomMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserBottomMenuPageRoutingModule {}
