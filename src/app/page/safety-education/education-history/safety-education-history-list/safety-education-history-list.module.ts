import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationHistoryListPageRoutingModule } from './safety-education-history-list-routing.module';

import { SafetyEducationHistoryListPage } from './safety-education-history-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationHistoryListPageRoutingModule
  ],
  declarations: [SafetyEducationHistoryListPage]
})
export class SafetyEducationHistoryListPageModule {}
