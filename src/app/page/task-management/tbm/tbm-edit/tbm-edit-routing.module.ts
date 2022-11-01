import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmEditPage } from './tbm-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TbmEditPage,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmEditPageRoutingModule {}