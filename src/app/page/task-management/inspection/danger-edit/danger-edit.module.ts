import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { DangerEditPageRoutingModule } from './danger-edit-routing.module';
import { DangerEditPage } from './danger-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerEditPageRoutingModule,
  ],
  declarations: [DangerEditPage]
})
export class DangerEditPageModule {}