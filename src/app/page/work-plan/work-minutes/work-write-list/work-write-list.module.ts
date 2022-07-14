import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkWriteListPageRoutingModule } from './work-write-list-routing.module';

import { WorkWriteListPage } from './work-write-list.page';
import { WorkerMinutesPendingListPageModule } from './../worker-minutes-pending-list/worker-minutes-pending-list.module';
import { WorkWriteSearchPageModule } from './../work-write-search/work-write-search.module';
import { WorkWriteTargetPageModule } from './../work-write-target/work-write-target.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkWriteListPageRoutingModule,
    WorkWriteTargetPageModule,
    WorkWriteSearchPageModule,
    WorkerMinutesPendingListPageModule
  ],
  declarations: [WorkWriteListPage]
})
export class WorkWriteListPageModule {}
