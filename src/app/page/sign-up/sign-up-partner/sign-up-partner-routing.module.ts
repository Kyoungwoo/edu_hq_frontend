import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPartnerPage } from './sign-up-partner.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPartnerPageRoutingModule {}
