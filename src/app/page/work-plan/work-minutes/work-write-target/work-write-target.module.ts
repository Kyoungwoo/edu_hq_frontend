import { WorkWriteEditPageModule } from './../work-write-edit/work-write-edit.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkWriteTargetPageRoutingModule } from './work-write-target-routing.module';

import { WorkWriteTargetPage } from './work-write-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkWriteTargetPageRoutingModule,
    WorkWriteEditPageModule
  ],
  declarations: [WorkWriteTargetPage]
})
export class WorkWriteTargetPageModule {}
