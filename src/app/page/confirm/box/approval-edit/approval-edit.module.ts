import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovalEditPageRoutingModule } from './approval-edit-routing.module';

import { ApprovalEditPage } from './approval-edit.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ApprovalEditPageRoutingModule
  ],
  declarations: [ApprovalEditPage]
})
export class ApprovalEditPageModule {}
