import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaStandardSetPageRoutingModule } from './area-standard-set-routing.module';

import { AreaStandardSetPage } from './area-standard-set.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { AreaAddPageModule } from '../area-add/area-add.module';
import { AreaModule } from './component/area.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    AreaStandardSetPageRoutingModule,
    AreaAddPageModule,
    AreaModule
  ],
  declarations: [AreaStandardSetPage]
})
export class AreaStandardSetPageModule {}
