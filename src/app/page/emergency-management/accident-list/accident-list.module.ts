import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { AccidentListPageRoutingModule } from './accident-list-routing.module';
import { AccidentListPage } from './accident-list.page';
import { AccidentEditPageModule } from '../accident-edit/accident-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    AccidentListPageRoutingModule,
    AccidentEditPageModule,
  ],
  declarations: [AccidentListPage]
})
export class AccidentListPageModule {}