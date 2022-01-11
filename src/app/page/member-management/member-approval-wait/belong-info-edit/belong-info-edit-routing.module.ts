import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelongInfoEditPage } from './belong-info-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BelongInfoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelongInfoEditPageRoutingModule {}
