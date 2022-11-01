import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbmRegistrationPage } from './tbm-registration.page';

const routes: Routes = [
  {
    path: '',
    component: TbmRegistrationPage,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbmRegistrationPageRoutingModule {}