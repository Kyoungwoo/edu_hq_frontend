import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NfcPageRoutingModule } from './nfc-routing.module';

import { NfcPage } from './nfc.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NfcPageRoutingModule
  ],
  declarations: [NfcPage]
})
export class NfcPageModule {}
