import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationDetailEditPageRoutingModule } from './safety-education-detail-edit-routing.module';

import { SafetyEducationDetailEditPage } from './safety-education-detail-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationDetailEditPageRoutingModule
  ],
  declarations: [SafetyEducationDetailEditPage]
})
export class SafetyEducationDetailEditPageModule {}
