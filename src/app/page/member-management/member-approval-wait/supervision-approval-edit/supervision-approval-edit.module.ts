import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionApprovalEditPageRoutingModule } from './supervision-approval-edit-routing.module';

import { SupervisionApprovalEditPage } from './supervision-approval-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SupervisionApprovalEditPageRoutingModule
  ],
  declarations: [SupervisionApprovalEditPage]
})
export class SupervisionApprovalEditPageModule {}
