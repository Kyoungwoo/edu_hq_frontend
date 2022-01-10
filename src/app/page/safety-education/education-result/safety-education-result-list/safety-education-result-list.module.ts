import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationResultListPageRoutingModule } from './safety-education-result-list-routing.module';

import { SafetyEducationResultListPage } from './safety-education-result-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { SafetyEducationResultDetailSearchPageModule } from '../safety-education-result-detail-search/safety-education-result-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationResultListPageRoutingModule,
    SafetyEducationResultDetailSearchPageModule
  ],
  declarations: [SafetyEducationResultListPage]
})
export class SafetyEducationResultListPageModule {}
