import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesplacementDetectionListPage } from './desplacement-detection-list.page';

const routes: Routes = [
  {
    path: '',
    component: DesplacementDetectionListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesplacementDetectionListPageRoutingModule {}
