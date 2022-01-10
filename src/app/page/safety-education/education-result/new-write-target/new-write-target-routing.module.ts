import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWriteTargetPage } from './new-write-target.page';

const routes: Routes = [
  {
    path: '',
    component: NewWriteTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWriteTargetPageRoutingModule {}
