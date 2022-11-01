import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { LhListPageRoutingModule } from './lh-list-routing.module';
import { LhListPage } from './lh-list.page';
import { LhEditPageModule } from '../lh-edit/lh-edit.module';
import { DailyDetailSearchPageModule } from '../daily-detail-search/daily-detail-search.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhListPageRoutingModule,
    LhEditPageModule,
    DailyDetailSearchPageModule
  ],
  declarations: [LhListPage]
})
export class LhListPageModule {}