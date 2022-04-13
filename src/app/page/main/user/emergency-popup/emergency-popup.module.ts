import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModule } from 'src/app/component/component.module';
import { EmergencyPopupComponent } from './emergency-popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  declarations: [EmergencyPopupComponent]
})
export class EmergencyPopupComponentModule {}
