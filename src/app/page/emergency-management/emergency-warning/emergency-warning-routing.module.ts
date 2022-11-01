import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyWarningPage } from './emergency-warning.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyWarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyWarningPageRoutingModule {}
