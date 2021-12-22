import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualEditPageRoutingModule } from './manual-edit-routing.module';

import { ManualEditPage } from './manual-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ManualEditPageRoutingModule
  ],
  declarations: [ManualEditPage]
})
export class ManualEditPageModule {}
