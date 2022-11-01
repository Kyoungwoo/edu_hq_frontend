import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyTargetPage } from './emergency-target.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyTargetPageRoutingModule {}
