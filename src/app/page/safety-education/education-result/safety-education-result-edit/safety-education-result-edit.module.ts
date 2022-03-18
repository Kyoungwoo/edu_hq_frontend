import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationResultEditPageRoutingModule } from './safety-education-result-edit-routing.module';

import { SafetyEducationResultEditPage } from './safety-education-result-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationResultEditPageRoutingModule
  ],
  declarations: [SafetyEducationResultEditPage]
})
export class SafetyEducationResultEditPageModule {}
