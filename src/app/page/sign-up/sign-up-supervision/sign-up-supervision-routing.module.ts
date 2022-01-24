import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpSupervisionPage } from './sign-up-supervision.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpSupervisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpSupervisionPageRoutingModule {}
