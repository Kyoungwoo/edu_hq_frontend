import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeOpenRangePageRoutingModule } from './notice-open-range-routing.module';

import { NoticeOpenRangePage } from './notice-open-range.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NoticeOpenRangePageRoutingModule
  ],
  declarations: [NoticeOpenRangePage]
})
export class NoticeOpenRangePageModule {}
