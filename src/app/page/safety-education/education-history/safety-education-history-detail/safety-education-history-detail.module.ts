import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationHistoryDetailPageRoutingModule } from './safety-education-history-detail-routing.module';

import { SafetyEducationHistoryDetailPage } from './safety-education-history-detail.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationHistoryDetailPageRoutingModule
  ],
  declarations: [SafetyEducationHistoryDetailPage]
})
export class SafetyEducationHistoryDetailPageModule {}
