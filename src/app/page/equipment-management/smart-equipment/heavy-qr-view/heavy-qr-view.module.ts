import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavyQrViewPageRoutingModule } from './heavy-qr-view-routing.module';

import { HeavyQrViewPage } from './heavy-qr-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    HeavyQrViewPageRoutingModule
  ],
  declarations: [HeavyQrViewPage]
})
export class HeavyQrViewPageModule {}
