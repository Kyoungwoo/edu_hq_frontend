import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplacementDetectionDetailPageRoutingModule } from './desplacement-detection-detail-routing.module';

import { DesplacementDetectionDetailPage } from './desplacement-detection-detail.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveModule,
    ComponentModule,
    DesplacementDetectionDetailPageRoutingModule,
  ],
  declarations: [DesplacementDetectionDetailPage],
})
export class DesplacementDetectionDetailPageModule {}
