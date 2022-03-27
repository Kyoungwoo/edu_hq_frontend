import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesEditPageRoutingModule } from './worker-minutes-edit-routing.module';

import { WorkerMinutesEditPage } from './worker-minutes-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerMinutesEditPageRoutingModule
  ],
  declarations: [WorkerMinutesEditPage]
})
export class WorkerMinutesEditPageModule {}
