import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { DailyListPageRoutingModule } from './daily-list-routing.module';
import { DailyListPage } from './daily-list.page';
import { DailyEditPageModule } from '../daily-edit/daily-edit.module';
import { DailyDetailSearchPageModule } from '../daily-detail-search/daily-detail-search.module';
// import { DailyDetailPageModule } from '../daily-detail/daily-detail.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DailyListPageRoutingModule,
    DailyEditPageModule,
    DailyDetailSearchPageModule,
    // DailyDetailPageModule
  ],
  declarations: [DailyListPage]
})
export class DailyListPageModule {}