import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindIdMobileTypePage } from './find-id-mobile-type.page';

const routes: Routes = [
  {
    path: '',
    component: FindIdMobileTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindIdMobileTypePageRoutingModule {}
