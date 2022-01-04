import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerStatusAddPageRoutingModule } from './worker-status-add-routing.module';

import { WorkerStatusAddPage } from './worker-status-add.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerStatusAddPageRoutingModule
  ],
  declarations: [WorkerStatusAddPage]
})
export class WorkerStatusAddPageModule {}
