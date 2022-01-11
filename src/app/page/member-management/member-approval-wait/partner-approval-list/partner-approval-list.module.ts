import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerApprovalListPageRoutingModule } from './partner-approval-list-routing.module';

import { PartnerApprovalListPage } from './partner-approval-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerApprovalListPageRoutingModule
  ],
  declarations: [PartnerApprovalListPage]
})
export class PartnerApprovalListPageModule {}
