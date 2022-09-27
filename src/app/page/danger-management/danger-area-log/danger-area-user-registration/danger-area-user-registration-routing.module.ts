import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangerAreaUserRegistrationPage } from './danger-area-user-registration.page';

const routes: Routes = [
  {
    path: '',
    component: DangerAreaUserRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangerAreaUserRegistrationPageRoutingModule {}
