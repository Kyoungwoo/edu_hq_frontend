import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyEditPageRoutingModule } from './emergency-edit-routing.module';
import { EmergencyEditPage } from './emergency-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    EmergencyEditPageRoutingModule,
  ],
  declarations: [EmergencyEditPage]
})
export class EmergencyEditPageModule {}