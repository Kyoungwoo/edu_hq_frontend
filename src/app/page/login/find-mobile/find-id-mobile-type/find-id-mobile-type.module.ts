import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindIdMobileTypePageRoutingModule } from './find-id-mobile-type-routing.module';

import { FindIdMobileTypePage } from './find-id-mobile-type.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindIdMobileTypePageRoutingModule
  ],
  declarations: [FindIdMobileTypePage]
})
export class FindIdMobileTypePageModule {}
