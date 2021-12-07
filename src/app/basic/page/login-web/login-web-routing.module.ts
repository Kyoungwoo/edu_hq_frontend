import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginWebPage } from './login-web.page';

const routes: Routes = [
  {
    path: '',
    component: LoginWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginWebPageRoutingModule {}
