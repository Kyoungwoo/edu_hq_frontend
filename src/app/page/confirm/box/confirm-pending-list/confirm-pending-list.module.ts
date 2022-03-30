import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPendingListPageRoutingModule } from './confirm-pending-list-routing.module';

import { ConfirmPendingListPage } from './confirm-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ConfirmPendingDetailSearchPageModule } from '../confirm-pending-detail-search/confirm-pending-detail-search.module';
import { WorkerMinutesEditPageModule } from 'src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmPendingListPageRoutingModule,
    ConfirmPendingDetailSearchPageModule,
    WorkerMinutesEditPageModule
  ],
  declarations: [ConfirmPendingListPage]
})
export class ConfirmPendingListPageModule {}
