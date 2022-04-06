import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSubAdminPage } from './main-sub-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MainSubAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSubAdminPageRoutingModule {}
