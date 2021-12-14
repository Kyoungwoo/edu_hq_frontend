import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpTermsPage } from './sign-up-terms.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpTermsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpTermsPageRoutingModule {}
