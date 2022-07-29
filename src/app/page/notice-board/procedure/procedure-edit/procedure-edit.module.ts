import { BasicComponentModule } from './../../../../basic/component/basic.component.module';
import { ComponentModule } from './../../../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedureEditPageRoutingModule } from './procedure-edit-routing.module';

import { ProcedureEditPage } from './procedure-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ProcedureEditPageRoutingModule
  ],
  declarations: [ProcedureEditPage]
})
export class ProcedureEditPageModule {}
