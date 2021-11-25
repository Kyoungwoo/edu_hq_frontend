import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputButtonPageRoutingModule } from './input-button-routing.module';

import { InputButtonPage } from './input-button.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicComponentModule,
    InputButtonPageRoutingModule
  ],
  declarations: [InputButtonPage]
})
export class InputButtonPageModule {}
