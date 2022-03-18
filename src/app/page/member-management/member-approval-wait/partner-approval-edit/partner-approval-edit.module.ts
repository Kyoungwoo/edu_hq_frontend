import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerApprovalEditPageRoutingModule } from './partner-approval-edit-routing.module';

import { PartnerApprovalEditPage } from './partner-approval-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerApprovalEditPageRoutingModule
  ],
  declarations: [PartnerApprovalEditPage]
})
export class PartnerApprovalEditPageModule {}
