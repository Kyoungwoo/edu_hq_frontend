import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyWarningPageRoutingModule } from './emergency-warning-routing.module';
import { EmergencyWarningPage } from './emergency-warning.page';
import { EmergencyTargetPageModule } from '../emergency-target/emergency-target.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    EmergencyWarningPageRoutingModule,
    EmergencyTargetPageModule
  ],
  declarations: [EmergencyWarningPage]
})
export class EmergencyWarningPageModule {}