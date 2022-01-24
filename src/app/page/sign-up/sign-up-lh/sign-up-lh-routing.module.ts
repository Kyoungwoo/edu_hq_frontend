import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpLhPage } from './sign-up-lh.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpLhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpLhPageRoutingModule {}
