import { ProcedureSearchPageModule } from './../procedure-search/procedure-search.module';
import { ProcedureEditPageModule } from './../procedure-edit/procedure-edit.module';
import { ComponentModule } from './../../../../component/component.module';
import { BasicComponentModule } from './../../../../basic/component/basic.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedureListPageRoutingModule } from './procedure-list-routing.module';

import { ProcedureListPage } from './procedure-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ProcedureListPageRoutingModule,
    ProcedureEditPageModule,
    ProcedureSearchPageModule
  ],
  declarations: [ProcedureListPage]
})
export class ProcedureListPageModule {}
