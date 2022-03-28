import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesSelectTypePageRoutingModule } from './worker-minutes-select-type-routing.module';

import { WorkerMinutesSelectTypePage } from './worker-minutes-select-type.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerMinutesSelectTypePageRoutingModule
  ],
  declarations: [WorkerMinutesSelectTypePage]
})
export class WorkerMinutesSelectTypePageModule {}
