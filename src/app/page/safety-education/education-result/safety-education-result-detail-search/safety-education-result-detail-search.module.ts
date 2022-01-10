import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationResultDetailSearchPageRoutingModule } from './safety-education-result-detail-search-routing.module';

import { SafetyEducationResultDetailSearchPage } from './safety-education-result-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationResultDetailSearchPageRoutingModule
  ],
  declarations: [SafetyEducationResultDetailSearchPage]
})
export class SafetyEducationResultDetailSearchPageModule {}
