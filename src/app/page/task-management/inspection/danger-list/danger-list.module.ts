import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { DangerListPageRoutingModule } from './danger-list-routing.module';
import { DangerListPage } from './danger-list.page';
import { DangerEditPageModule } from '../danger-edit/danger-edit.module';
import { DangerSearchPageModule } from '../danger-search/danger-search.module';
import { DangerDetailSearchPageModule } from '../danger-detail-search/danger-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerListPageRoutingModule,
    DangerEditPageModule,
    DangerSearchPageModule,
    DangerDetailSearchPageModule
  ],
  declarations: [DangerListPage]
})
export class DangerListPageModule {}