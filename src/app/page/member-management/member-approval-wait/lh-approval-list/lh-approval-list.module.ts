import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhApprovalListPageRoutingModule } from './lh-approval-list-routing.module';

import { LhApprovalListPage } from './lh-approval-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { LhApprovalEditPageModule } from '../lh-approval-edit/lh-approval-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhApprovalListPageRoutingModule,
    LhApprovalEditPageModule
  ],
  declarations: [LhApprovalListPage]
})
export class LhApprovalListPageModule {}
