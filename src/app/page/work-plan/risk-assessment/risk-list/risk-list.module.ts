import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskListPageRoutingModule } from './risk-list-routing.module';

import { RiskListPage } from './risk-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { RiskDetailSearchPageModule } from '../risk-detail-search/risk-detail-search.module';
import { RiskEvaluationEditPageModule } from '../risk-evaluation-edit/risk-evaluation-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    RiskListPageRoutingModule,
    RiskDetailSearchPageModule,
    RiskEvaluationEditPageModule
  ],
  declarations: [RiskListPage]
})
export class RiskListPageModule {}
