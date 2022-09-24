import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusListPageRoutingModule } from './today-danger-area-status-list-routing.module';

import { TodayDepartureStatusListPage } from './today-danger-area-status-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { TodayDepartureStatusEditPageModule } from '../today-danger-area-status-edit/today-danger-area-status-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TodayDepartureStatusListPageRoutingModule,
    TodayDepartureStatusEditPageModule
  ],
  declarations: [TodayDepartureStatusListPage],
  exports: [TodayDepartureStatusListPage]
})
export class TodayDepartureStatusListPageModule {}
