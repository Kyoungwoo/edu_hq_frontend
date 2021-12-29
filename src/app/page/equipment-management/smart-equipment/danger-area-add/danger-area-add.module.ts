import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaAddPageRoutingModule } from './danger-area-add-routing.module';

import { DangerAreaAddPage } from './danger-area-add.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    DangerAreaAddPageRoutingModule
  ],
  declarations: [DangerAreaAddPage]
})
export class DangerAreaAddPageModule {}
