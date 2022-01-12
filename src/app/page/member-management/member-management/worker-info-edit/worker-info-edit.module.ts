import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerInfoEditPageRoutingModule } from './worker-info-edit-routing.module';

import { WorkerInfoEditPage } from './worker-info-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerInfoEditPageRoutingModule
  ],
  declarations: [WorkerInfoEditPage]
})
export class WorkerInfoEditPageModule {}
