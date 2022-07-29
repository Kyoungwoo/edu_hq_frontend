import { BasicComponentModule } from './../../../../basic/component/basic.component.module';
import { ComponentModule } from './../../../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedureSearchPageRoutingModule } from './procedure-search-routing.module';

import { ProcedureSearchPage } from './procedure-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ProcedureSearchPageRoutingModule
  ],
  declarations: [ProcedureSearchPage]
})
export class ProcedureSearchPageModule {}
