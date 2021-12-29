import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaStandardSetPageRoutingModule } from './area-standard-set-routing.module';

import { AreaStandardSetPage } from './area-standard-set.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    AreaStandardSetPageRoutingModule
  ],
  declarations: [AreaStandardSetPage]
})
export class AreaStandardSetPageModule {}
