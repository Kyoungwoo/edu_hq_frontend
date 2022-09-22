import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesplacementDetectionDetailPage } from './desplacement-detection-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DesplacementDetectionDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesplacementDetectionDetailPageRoutingModule {}
