import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyEquipEditPage } from './heavy-equip-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyEquipEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyEquipEditPageRoutingModule {}
