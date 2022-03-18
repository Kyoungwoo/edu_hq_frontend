import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerApprovalListPageRoutingModule } from './worker-approval-list-routing.module';

import { WorkerApprovalListPage } from './worker-approval-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { WorkerApprovalEditPage } from '../worker-approval-edit/worker-approval-edit.page';
import { WorkerApprovalEditPageRoutingModule } from '../worker-approval-edit/worker-approval-edit-routing.module';
import { WorkerApprovalEditPageModule } from '../worker-approval-edit/worker-approval-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerApprovalListPageRoutingModule,
    WorkerApprovalEditPageModule
  ],
  declarations: [WorkerApprovalListPage]
})
export class WorkerApprovalListPageModule {}
