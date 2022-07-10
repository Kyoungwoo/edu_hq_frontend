import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkWriteEditPageRoutingModule } from './work-write-edit-routing.module';

import { WorkWriteEditPage } from './work-write-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    WorkWriteEditPageRoutingModule
  ],
  declarations: [WorkWriteEditPage]
})
export class WorkWriteEditPageModule {}
