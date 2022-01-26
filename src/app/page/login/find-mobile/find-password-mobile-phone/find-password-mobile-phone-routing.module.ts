import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPasswordMobilePhonePage } from './find-password-mobile-phone.page';

const routes: Routes = [
  {
    path: '',
    component: FindPasswordMobilePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPasswordMobilePhonePageRoutingModule {}
