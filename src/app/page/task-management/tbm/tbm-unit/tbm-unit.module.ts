import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { TbmUnitPageRoutingModule } from './tbm-unit-routing.module';
import { TbmUnitPage } from './tbm-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TbmUnitPageRoutingModule
  ],
  declarations: [TbmUnitPage]
})
export class TbmUnitPageModule {}