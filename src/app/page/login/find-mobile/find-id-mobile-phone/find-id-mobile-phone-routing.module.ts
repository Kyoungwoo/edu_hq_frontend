import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindIdMobilePhonePage } from './find-id-mobile-phone.page';

const routes: Routes = [
  {
    path: '',
    component: FindIdMobilePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindIdMobilePhonePageRoutingModule {}
