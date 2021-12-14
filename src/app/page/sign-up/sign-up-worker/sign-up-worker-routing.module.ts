import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpWorkerPage } from './sign-up-worker.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpWorkerPageRoutingModule {}
