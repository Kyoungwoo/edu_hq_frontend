import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerApprovalListPageRoutingModule } from './worker-approval-list-routing.module';

import { WorkerApprovalListPage } from './worker-approval-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerApprovalListPageRoutingModule
  ],
  declarations: [WorkerApprovalListPage]
})
export class WorkerApprovalListPageModule {}
