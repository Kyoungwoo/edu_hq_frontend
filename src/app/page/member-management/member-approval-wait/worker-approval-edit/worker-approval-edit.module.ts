import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerApprovalEditPageRoutingModule } from './worker-approval-edit-routing.module';

import { WorkerApprovalEditPage } from './worker-approval-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerApprovalEditPageRoutingModule
  ],
  declarations: [WorkerApprovalEditPage]
})
export class WorkerApprovalEditPageModule {}
