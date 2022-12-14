import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationResultListPageRoutingModule } from './safety-education-result-list-routing.module';

import { SafetyEducationResultListPage } from './safety-education-result-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SafetyEducationResultDetailSearchPageModule } from '../safety-education-result-detail-search/safety-education-result-detail-search.module';
import { NewWriteTargetPageModule } from '../new-write-target/new-write-target.module';
import { EducationConfirmPendingListPageModule } from '../education-confirm-pending-list/education-confirm-pending-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SafetyEducationResultListPageRoutingModule,
    SafetyEducationResultDetailSearchPageModule,
    NewWriteTargetPageModule,
    EducationConfirmPendingListPageModule
  ],
  declarations: [SafetyEducationResultListPage]
})
export class SafetyEducationResultListPageModule {}
