import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerMinutesDetailSearchPageRoutingModule } from './worker-minutes-detail-search-routing.module';

import { WorkerMinutesDetailSearchPage } from './worker-minutes-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkerMinutesDetailSearchPageRoutingModule
  ],
  declarations: [WorkerMinutesDetailSearchPage]
})
export class WorkerMinutesDetailSearchPageModule {}
