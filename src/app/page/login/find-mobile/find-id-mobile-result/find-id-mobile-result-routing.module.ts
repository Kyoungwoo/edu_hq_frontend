import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindIdMobileResultPage } from './find-id-mobile-result.page';

const routes: Routes = [
  {
    path: '',
    component: FindIdMobileResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindIdMobileResultPageRoutingModule {}
