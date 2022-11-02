import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { AccidentEditPageRoutingModule } from './accident-edit-routing.module';
import { AccidentEditPage } from './accident-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    AccidentEditPageRoutingModule,
  ],
  declarations: [AccidentEditPage]
})
export class AccidentEditPageModule {}