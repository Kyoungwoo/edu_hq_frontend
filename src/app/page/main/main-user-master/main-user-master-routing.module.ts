import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainUserMasterPage } from './main-user-master.page';

const routes: Routes = [
  {
    path: '',
    component: MainUserMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserMasterPageRoutingModule {}
