import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationListPageRoutingModule } from './safety-education-list-routing.module';

import { SafetyEducationListPage } from './safety-education-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { SafetyEducationDetailSearchPageModule } from '../safety-education-detail-search/safety-education-detail-search.module';
import { SafetyEducationDetailListPageModule } from '../safety-education-detail-list/safety-education-detail-list.module';
import { SafetyEducationDetailEditPageModule } from '../safety-education-detail-edit/safety-education-detail-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationListPageRoutingModule,
    SafetyEducationDetailListPageModule,
    SafetyEducationDetailEditPageModule,
    SafetyEducationDetailSearchPageModule,
    
  ],
  declarations: [SafetyEducationListPage]
})
export class SafetyEducationListPageModule {}
