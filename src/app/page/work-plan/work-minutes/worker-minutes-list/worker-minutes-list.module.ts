import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesListPageRoutingModule } from './worker-minutes-list-routing.module';

import { WorkerMinutesListPage } from './worker-minutes-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { WorkerMinutesDetailSearchPageModule } from '../worker-minutes-detail-search/worker-minutes-detail-search.module';
import { WorkerMinutesSelectTypePageModule } from '../worker-minutes-select-type/worker-minutes-select-type.module';
import { WorkerMinutesEditPageModule } from '../worker-minutes-edit/worker-minutes-edit.module';
import { WorkerMinutesPendingListPageModule } from '../worker-minutes-pending-list/worker-minutes-pending-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerMinutesListPageRoutingModule,
    // 모바일 상세검색
    WorkerMinutesDetailSearchPageModule,
    // 신규작성 시, 타입 선택
    WorkerMinutesSelectTypePageModule,
    // 수정 페이지
    WorkerMinutesEditPageModule,
    // 미결함
    WorkerMinutesPendingListPageModule
  ],
  declarations: [WorkerMinutesListPage]
})
export class WorkerMinutesListPageModule {}
