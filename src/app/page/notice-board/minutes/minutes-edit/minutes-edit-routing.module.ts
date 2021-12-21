import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinutesEditPage } from './minutes-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MinutesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinutesEditPageRoutingModule {}
