import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkWriteSearchPageRoutingModule } from './work-write-search-routing.module';

import { WorkWriteSearchPage } from './work-write-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkWriteSearchPageRoutingModule
  ],
  declarations: [WorkWriteSearchPage]
})
export class WorkWriteSearchPageModule {}
