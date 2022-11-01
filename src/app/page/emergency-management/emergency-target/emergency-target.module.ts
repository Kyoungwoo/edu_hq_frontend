import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyTargetPageRoutingModule } from './emergency-target-routing.module';
import { EmergencyTargetPage } from './emergency-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    EmergencyTargetPageRoutingModule,
  ],
  declarations: [EmergencyTargetPage]
})
export class EmergencyTargetPageModule {}