import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkMyDetailPageRoutingModule } from './work-my-detail-routing.module';

import { WorkMyDetailPage } from './work-my-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkMyDetailPageRoutingModule
  ],
  declarations: [WorkMyDetailPage]
})
export class WorkMyDetailPageModule {}
