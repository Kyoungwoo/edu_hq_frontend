import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationDetailEditPageRoutingModule } from './safety-education-detail-edit-routing.module';

import { SafetyEducationDetailEditPage } from './safety-education-detail-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { QrEducationInPageModule } from '../qr-education-in/qr-education-in.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    QrEducationInPageModule,
    SafetyEducationDetailEditPageRoutingModule,
  ],
  declarations: [SafetyEducationDetailEditPage]
})
export class SafetyEducationDetailEditPageModule {}
