import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPasswordMobileTypePage } from './find-password-mobile-type.page';

const routes: Routes = [
  {
    path: '',
    component: FindPasswordMobileTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPasswordMobileTypePageRoutingModule {}
