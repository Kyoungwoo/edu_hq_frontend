import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsListPageRoutingModule } from './msds-list-routing.module';

import { MsdsListPage } from './msds-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { MsdsEditPageModule } from '../msds-edit/msds-edit.module';
import { MsdsSearchPageModule } from '../msds-search/msds-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MsdsListPageRoutingModule,
    MsdsSearchPageModule,
    MsdsEditPageModule
  ],
  declarations: [MsdsListPage]
})
export class MsdsListPageModule {}
