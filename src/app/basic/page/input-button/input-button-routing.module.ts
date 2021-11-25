import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputButtonPage } from './input-button.page';

const routes: Routes = [
  {
    path: '',
    component: InputButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputButtonPageRoutingModule {}
