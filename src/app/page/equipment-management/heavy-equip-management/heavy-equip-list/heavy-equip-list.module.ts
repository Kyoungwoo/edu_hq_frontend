import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyEquipListPageRoutingModule } from './heavy-equip-list-routing.module';

import { HeavyEquipListPage } from './heavy-equip-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { HeavyEquipEditPageModule } from '../heavy-equip-edit/heavy-equip-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    HeavyEquipListPageRoutingModule,
    HeavyEquipEditPageModule
  ],
  declarations: [HeavyEquipListPage]
})
export class HeavyEquipListPageModule {}
