import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifyListPage } from './notify-list.page';

const routes: Routes = [
  {
    path: '',
    component: NotifyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifyListPageRoutingModule {}
