import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneEditPage } from './scene-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SceneEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneEditPageRoutingModule {}
