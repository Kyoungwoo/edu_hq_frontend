import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerInfoListPageRoutingModule } from './worker-info-list-routing.module';

import { WorkerInfoListPage } from './worker-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    WorkerInfoListPageRoutingModule
  ],
  declarations: [WorkerInfoListPage]
})
export class WorkerInfoListPageModule {}
