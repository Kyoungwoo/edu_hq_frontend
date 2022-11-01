import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { LhEditPageRoutingModule } from './lh-edit-routing.module';
import { LhEditPage } from './lh-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhEditPageRoutingModule,
  ],
  declarations: [LhEditPage]
})
export class LhEditPageModule {}