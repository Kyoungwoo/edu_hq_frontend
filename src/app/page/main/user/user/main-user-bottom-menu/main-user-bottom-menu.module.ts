import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainUserBottomMenuPageRoutingModule } from './main-user-bottom-menu-routing.module';

import { MainUserBottomMenuPage } from './main-user-bottom-menu.page';
import { ComponentModule } from 'src/app/component/component.module';
import { NoticeEditPageModule } from 'src/app/page/notice-board/notice/notice-edit/notice-edit.module';
import { WorkerMinutesEditPageModule } from 'src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module';
import { MsdsEditPageModule } from 'src/app/page/notice-board/msds/msds-edit/msds-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainUserBottomMenuPageRoutingModule,
    NoticeEditPageModule,
    WorkerMinutesEditPageModule,
    MsdsEditPageModule
  ],
  declarations: [MainUserBottomMenuPage],
  exports: [MainUserBottomMenuPage]
})
export class MainUserBottomMenuPageModule {}
