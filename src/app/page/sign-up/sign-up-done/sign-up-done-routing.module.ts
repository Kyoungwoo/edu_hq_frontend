import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpDonePage } from './sign-up-done.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpDonePageRoutingModule {}
