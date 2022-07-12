import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrSafetyInPageRoutingModule } from './qr-safety-in-routing.module';

import { QrSafetyInPage } from './qr-safety-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    QrSafetyInPageRoutingModule
  ],
  declarations: [QrSafetyInPage]
})
export class QrSafetyInPageModule {}
