import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindIdPageRoutingModule } from './find-id-routing.module';

import { FindIdPage } from './find-id.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindIdPageRoutingModule
  ],
  declarations: [FindIdPage]
})
export class FindIdPageModule {}
