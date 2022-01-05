import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkStandardSetPageRoutingModule } from './work-standard-set-routing.module';

import { WorkStandardSetPage } from './work-standard-set.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkStandardSetPageRoutingModule
  ],
  declarations: [WorkStandardSetPage]
})
export class WorkStandardSetPageModule {}
