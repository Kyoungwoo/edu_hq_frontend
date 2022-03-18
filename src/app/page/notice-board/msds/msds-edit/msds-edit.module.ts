import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsEditPageRoutingModule } from './msds-edit-routing.module';

import { MsdsEditPage } from './msds-edit.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { NoticeOpenRangePageModule } from '../../notice-open-range/notice-open-range.module';
import { NoticeOpenRangePage } from '../../notice-open-range/notice-open-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MsdsEditPageRoutingModule,
    NoticeOpenRangePageModule
    
  ],
  declarations: [MsdsEditPage],
  providers: [
    NoticeOpenRangePage
  ]
})
export class MsdsEditPageModule {}
