import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyListPage } from './emergency-list.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyListPageRoutingModule {}
