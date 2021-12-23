import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavyEquipListPage } from './heavy-equip-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeavyEquipListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyEquipListPageRoutingModule {}
