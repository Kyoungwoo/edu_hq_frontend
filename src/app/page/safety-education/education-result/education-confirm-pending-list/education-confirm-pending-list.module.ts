import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationConfirmPendingListPageRoutingModule } from './education-confirm-pending-list-routing.module';

import { EducationConfirmPendingListPage } from './education-confirm-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { SafetyEducationResultEditPageModule } from '../safety-education-result-edit/safety-education-result-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationResultEditPageModule,
    EducationConfirmPendingListPageRoutingModule
  ],
  declarations: [EducationConfirmPendingListPage]
})
export class EducationConfirmPendingListPageModule {}
