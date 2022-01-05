import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneAreaSetPage } from './scene-area-set.page';

const routes: Routes = [
  {
    path: '',
    component: SceneAreaSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneAreaSetPageRoutingModule {}
