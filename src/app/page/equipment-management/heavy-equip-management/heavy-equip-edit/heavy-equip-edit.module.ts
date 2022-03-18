import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyEquipEditPageRoutingModule } from './heavy-equip-edit-routing.module';

import { HeavyEquipEditPage } from './heavy-equip-edit.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    HeavyEquipEditPageRoutingModule
  ],
  declarations: [HeavyEquipEditPage]
})
export class HeavyEquipEditPageModule {}
