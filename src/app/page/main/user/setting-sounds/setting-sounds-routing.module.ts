import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingSoundsPage } from './setting-sounds.page';

const routes: Routes = [
  {
    path: '',
    component: SettingSoundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingSoundsPageRoutingModule {}
