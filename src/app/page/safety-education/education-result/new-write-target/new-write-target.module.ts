import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWriteTargetPageRoutingModule } from './new-write-target-routing.module';

import { NewWriteTargetPage } from './new-write-target.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    NewWriteTargetPageRoutingModule
  ],
  declarations: [NewWriteTargetPage]
})
export class NewWriteTargetPageModule {}
