import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaUserListPageRoutingModule } from './danger-area-user-list-routing.module';

import { DangerAreaUserListPage } from './danger-area-user-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { TodayDepartureStatusEditPageModule } from '../today-danger-area-status-edit/today-danger-area-status-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerAreaUserListPageRoutingModule,
    TodayDepartureStatusEditPageModule,
  ],
  declarations: [DangerAreaUserListPage],
  exports: [DangerAreaUserListPage]
})
export class DangerAreaUserListPageModule {}
