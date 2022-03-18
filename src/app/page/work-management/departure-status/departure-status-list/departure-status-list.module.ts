import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartureStatusListPageRoutingModule } from './departure-status-list-routing.module';

import { DepartureStatusListPage } from './departure-status-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { TodayDepartureStatusListPageModule } from '../today-departure-status-list/today-departure-status-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DepartureStatusListPageRoutingModule,
    TodayDepartureStatusListPageModule
  ],
  declarations: [DepartureStatusListPage]
})
export class DepartureStatusListPageModule {}
