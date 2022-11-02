import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentEditPage } from './accident-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentEditPageRoutingModule {}
