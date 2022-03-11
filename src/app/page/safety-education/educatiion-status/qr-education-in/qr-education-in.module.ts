import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrEducationInPageRoutingModule } from './qr-education-in-routing.module';

import { QrEducationInPage } from './qr-education-in.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    QrEducationInPageRoutingModule
  ],
  declarations: [QrEducationInPage]
})
export class QrEducationInPageModule {}
