import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWriteEditPage } from './work-write-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WorkWriteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkWriteEditPageRoutingModule {}
