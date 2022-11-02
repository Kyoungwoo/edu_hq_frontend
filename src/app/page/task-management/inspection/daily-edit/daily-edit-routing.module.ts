import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyEditPage } from './daily-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DailyEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyEditPageRoutingModule {}
