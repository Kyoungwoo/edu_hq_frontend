import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionApprovalListPageRoutingModule } from './supervision-approval-list-routing.module';

import { SupervisionApprovalListPage } from './supervision-approval-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SupervisionEditPageModule } from 'src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SupervisionApprovalListPageRoutingModule,
    SupervisionEditPageModule
  ],
  declarations: [SupervisionApprovalListPage]
})
export class SupervisionApprovalListPageModule {}
