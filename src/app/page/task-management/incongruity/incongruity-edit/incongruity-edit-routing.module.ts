import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncongruityEditPage } from './incongruity-edit.page';

const routes: Routes = [
  {
    path: '',
    component: IncongruityEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncongruityEditPageRoutingModule {}
