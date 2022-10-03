import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayDangerAreaStatusListPageRoutingModule } from './today-danger-area-status-list-routing.module';

import { TodayDangerAreaStatusListPage } from './today-danger-area-status-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { TodayDangerAreaStatusEditPageModule } from '../today-danger-area-status-edit/today-danger-area-status-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TodayDangerAreaStatusListPageRoutingModule,
    TodayDangerAreaStatusEditPageModule
  ],
  declarations: [TodayDangerAreaStatusListPage],
  //exports: [TodayDangerAreaStatusListPage]
})
export class TodayDangerAreaStatusListPageModule {}
