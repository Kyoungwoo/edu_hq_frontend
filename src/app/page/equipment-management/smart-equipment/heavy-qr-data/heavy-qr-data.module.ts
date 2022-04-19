import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyQrDataPageRoutingModule } from './heavy-qr-data-routing.module';

import { HeavyQrDataPage } from './heavy-qr-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeavyQrDataPageRoutingModule
  ],
  declarations: [HeavyQrDataPage]
})
export class HeavyQrDataPageModule {}
