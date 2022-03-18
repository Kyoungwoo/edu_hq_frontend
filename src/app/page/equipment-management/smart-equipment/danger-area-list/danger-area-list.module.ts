import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaListPageRoutingModule } from './danger-area-list-routing.module';

import { DangerAreaListPage } from './danger-area-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { DangerAreaDetailSearchPageModule } from '../danger-area-detail-search/danger-area-detail-search.module';
import { DangerAreaAddPageModule } from '../danger-area-add/danger-area-add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    DangerAreaListPageRoutingModule,
    DangerAreaDetailSearchPageModule,
    DangerAreaAddPageModule
  ],
  declarations: [DangerAreaListPage]
})
export class DangerAreaListPageModule {}
