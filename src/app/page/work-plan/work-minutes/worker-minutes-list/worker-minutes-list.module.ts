import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesListPageRoutingModule } from './worker-minutes-list-routing.module';

import { WorkerMinutesListPage } from './worker-minutes-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { WorkerMinutesDetailSearchPageModule } from '../worker-minutes-detail-search/worker-minutes-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerMinutesListPageRoutingModule,
    WorkerMinutesDetailSearchPageModule
  ],
  declarations: [WorkerMinutesListPage]
})
export class WorkerMinutesListPageModule {}
