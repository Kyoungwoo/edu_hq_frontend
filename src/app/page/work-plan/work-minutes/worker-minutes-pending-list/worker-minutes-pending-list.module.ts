import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesPendingListPageRoutingModule } from './worker-minutes-pending-list-routing.module';

import { WorkerMinutesPendingListPage } from './worker-minutes-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { WorkerMinutesEditPageModule } from '../worker-minutes-edit/worker-minutes-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerMinutesPendingListPageRoutingModule,
    WorkerMinutesEditPageModule
  ],
  declarations: [WorkerMinutesPendingListPage]
})
export class WorkerMinutesPendingListPageModule {}
