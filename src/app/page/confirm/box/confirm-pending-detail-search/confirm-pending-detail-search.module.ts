import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPendingDetailSearchPageRoutingModule } from './confirm-pending-detail-search-routing.module';

import { ConfirmPendingDetailSearchPage } from './confirm-pending-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmPendingDetailSearchPageRoutingModule
  ],
  declarations: [ConfirmPendingDetailSearchPage]
})
export class ConfirmPendingDetailSearchPageModule {}
