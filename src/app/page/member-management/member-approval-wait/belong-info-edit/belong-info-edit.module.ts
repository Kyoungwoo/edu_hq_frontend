import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelongInfoEditPageRoutingModule } from './belong-info-edit-routing.module';

import { BelongInfoEditPage } from './belong-info-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BelongInfoEditPageRoutingModule
  ],
  declarations: [BelongInfoEditPage]
})
export class BelongInfoEditPageModule {}
