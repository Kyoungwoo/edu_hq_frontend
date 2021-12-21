import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutesPageRoutingModule } from './minutes-routing.module';

import { MinutesPage } from './minutes.page';
import { NoticePageRoutingModule } from '../notice/notice-routing.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MinutesPageRoutingModule,
    NoticePageRoutingModule
  ],
  declarations: [MinutesPage]
})
export class MinutesPageModule {}
