import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberStandardSetPage } from './member-standard-set.page';

const routes: Routes = [
  {
    path: '',
    component: MemberStandardSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberStandardSetPageRoutingModule {}
