import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerStatusListPageRoutingModule } from './worker-status-list-routing.module';

import { WorkerStatusListPage } from './worker-status-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { WorkerStatusAddPageModule } from '../worker-status-add/worker-status-add.module';
import { StatusSearchModule } from '../../component/status-search.module';
import { QrService } from 'src/app/basic/service/util/qr.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerStatusListPageRoutingModule,
    WorkerStatusAddPageModule,
    StatusSearchModule
  ],
  declarations: [WorkerStatusListPage],
  providers:[
    QrService
  ]
})
export class WorkerStatusListPageModule {}
