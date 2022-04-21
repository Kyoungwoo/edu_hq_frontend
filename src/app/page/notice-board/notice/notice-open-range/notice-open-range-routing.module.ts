import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeOpenRangePage } from './notice-open-range.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeOpenRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeOpenRangePageRoutingModule {}
