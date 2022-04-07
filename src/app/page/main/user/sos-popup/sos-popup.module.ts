import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosPopupPageRoutingModule } from './sos-popup-routing.module';

import { SosPopupPage } from './sos-popup.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SosPopupPageRoutingModule
  ],
  declarations: [SosPopupPage]
})
export class SosPopupPageModule {}
