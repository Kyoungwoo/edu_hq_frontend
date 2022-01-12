import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhInfoEditPageRoutingModule } from './lh-info-edit-routing.module';

import { LhInfoEditPage } from './lh-info-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhInfoEditPageRoutingModule
  ],
  declarations: [LhInfoEditPage]
})
export class LhInfoEditPageModule {}
