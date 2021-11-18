import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

import { InputComponentModule } from './input/input.component.module';
import { UiComponentModule } from './ui/ui.component.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    InputComponentModule,
    UiComponentModule,
  ],
  exports: [
    InputComponentModule,
    UiComponentModule
  ]
})
export class BasicComponentModule { }
