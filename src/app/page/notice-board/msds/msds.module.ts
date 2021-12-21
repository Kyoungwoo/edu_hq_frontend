import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsPageRoutingModule } from './msds-routing.module';

import { MsdsPage } from './msds.page';
import { ComponentModule } from 'src/app/component/component.module';
import { NoticePageRoutingModule } from '../notice/notice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NoticePageRoutingModule,
    MsdsPageRoutingModule
  ],
  declarations: [MsdsPage]
})
export class MsdsPageModule {}
