import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyHookListPage } from './safety-hook-list.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyHookListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyHookListPageRoutingModule {}
