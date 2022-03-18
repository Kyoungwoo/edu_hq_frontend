import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPasswordMobileResultPage } from './find-password-mobile-result.page';

const routes: Routes = [
  {
    path: '',
    component: FindPasswordMobileResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPasswordMobileResultPageRoutingModule {}
