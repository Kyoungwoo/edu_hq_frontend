import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyDetailSearchPage } from './emergency-detail-search.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyDetailSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyDetailSearchPageRoutingModule {}
