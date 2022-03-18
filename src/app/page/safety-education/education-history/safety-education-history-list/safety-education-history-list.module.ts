import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationHistoryListPageRoutingModule } from './safety-education-history-list-routing.module';

import { SafetyEducationHistoryListPage } from './safety-education-history-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { SafetyEducationHistoryDetailPageModule } from '../safety-education-history-detail/safety-education-history-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationHistoryListPageRoutingModule,
    SafetyEducationHistoryDetailPageModule
  ],
  declarations: [SafetyEducationHistoryListPage]
})
export class SafetyEducationHistoryListPageModule {}
