import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeListPageRoutingModule } from './notice-list-routing.module';

import { NoticeListPage } from './notice-list.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    NoticeListPageRoutingModule
  ],
  declarations: [NoticeListPage]
})
export class NoticeListPageModule {}