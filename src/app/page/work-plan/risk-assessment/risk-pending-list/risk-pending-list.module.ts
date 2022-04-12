import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskPendingListPageRoutingModule } from './risk-pending-list-routing.module';

import { RiskPendingListPage } from './risk-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    RiskPendingListPageRoutingModule
  ],
  declarations: [RiskPendingListPage]
})
export class RiskPendingListPageModule {}
