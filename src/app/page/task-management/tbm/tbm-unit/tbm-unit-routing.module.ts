import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmUnitPage } from './tbm-unit.page';

const routes: Routes = [
  {
    path: '',
    component: TbmUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmUnitPageRoutingModule {}
