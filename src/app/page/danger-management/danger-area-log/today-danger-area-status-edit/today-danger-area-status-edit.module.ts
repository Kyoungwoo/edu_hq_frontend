import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusEditPageRoutingModule } from './today-danger-area-status-edit-routing.module';

import { TodayDepartureStatusEditPage } from './today-danger-area-status-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TodayDepartureStatusEditPageRoutingModule
  ],
  declarations: [TodayDepartureStatusEditPage],
  exports: [TodayDepartureStatusEditPage]
})
export class TodayDepartureStatusEditPageModule {}
