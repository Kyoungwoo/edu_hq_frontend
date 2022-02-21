import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusEditPageRoutingModule } from './today-departure-status-edit-routing.module';

import { TodayDepartureStatusEditPage } from './today-departure-status-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayDepartureStatusEditPageRoutingModule
  ],
  declarations: [TodayDepartureStatusEditPage]
})
export class TodayDepartureStatusEditPageModule {}
