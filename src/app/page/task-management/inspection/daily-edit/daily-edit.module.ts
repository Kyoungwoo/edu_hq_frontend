import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { DailyEditPageRoutingModule } from './daily-edit-routing.module';
import { DailyEditPage } from './daily-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DailyEditPageRoutingModule,
  ],
  declarations: [DailyEditPage]
})
export class DailyEditPageModule {}