import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualEditPage } from './manual-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ManualEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualEditPageRoutingModule {}
