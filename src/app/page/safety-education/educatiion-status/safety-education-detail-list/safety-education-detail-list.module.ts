import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationDetailListPageRoutingModule } from './safety-education-detail-list-routing.module';

import { SafetyEducationDetailListPage } from './safety-education-detail-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationDetailListPageRoutingModule
  ],
  declarations: [SafetyEducationDetailListPage]
})
export class SafetyEducationDetailListPageModule {}
