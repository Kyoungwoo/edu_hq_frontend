import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationConfirmPendingListPageRoutingModule } from './education-confirm-pending-list-routing.module';

import { EducationConfirmPendingListPage } from './education-confirm-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    EducationConfirmPendingListPageRoutingModule
  ],
  declarations: [EducationConfirmPendingListPage]
})
export class EducationConfirmPendingListPageModule {}