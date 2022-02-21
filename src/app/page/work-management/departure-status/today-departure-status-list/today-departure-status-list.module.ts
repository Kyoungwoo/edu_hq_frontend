import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusListPageRoutingModule } from './today-departure-status-list-routing.module';

import { TodayDepartureStatusListPage } from './today-departure-status-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayDepartureStatusListPageRoutingModule
  ],
  declarations: [TodayDepartureStatusListPage]
})
export class TodayDepartureStatusListPageModule {}
