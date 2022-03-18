import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideImagePage } from './guide-image.page';

const routes: Routes = [
  {
    path: '',
    component: GuideImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideImagePageRoutingModule {}
