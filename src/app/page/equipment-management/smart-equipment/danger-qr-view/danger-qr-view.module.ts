import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerQrViewPageRoutingModule } from './danger-qr-view-routing.module';

import { DangerQrViewPage } from './danger-qr-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerQrViewPageRoutingModule
  ],
  declarations: [DangerQrViewPage]
})
export class DangerQrViewPageModule {}
