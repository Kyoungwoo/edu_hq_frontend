import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsEditPageRoutingModule } from './msds-edit-routing.module';

import { MsdsEditPage } from './msds-edit.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MsdsEditPageRoutingModule
  ],
  declarations: [MsdsEditPage]
})
export class MsdsEditPageModule {}
