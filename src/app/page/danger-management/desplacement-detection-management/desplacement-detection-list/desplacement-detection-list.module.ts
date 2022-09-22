import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplacementDetectionListPageRoutingModule } from './desplacement-detection-list-routing.module';

import { DesplacementDetectionListPage } from './desplacement-detection-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { DesplacementDetectionDetailPageModule } from '../desplacement-detection-detail/desplacement-detection-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DesplacementDetectionListPageRoutingModule,
    DesplacementDetectionDetailPageModule,
  ],
  declarations: [DesplacementDetectionListPage],
})
export class DesplacementDetectionListPageModule {}
