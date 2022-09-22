import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyHookDetailPage } from './safety-hook-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyHookDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyHookDetailPageRoutingModule {}
