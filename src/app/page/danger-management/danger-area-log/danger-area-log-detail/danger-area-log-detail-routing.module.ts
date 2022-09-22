import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaLogDetailPage } from './danger-area-log-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaLogDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DnagerAreaLogDetailPageRoutingModule {}
