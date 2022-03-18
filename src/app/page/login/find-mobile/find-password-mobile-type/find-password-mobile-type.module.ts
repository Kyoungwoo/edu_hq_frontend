import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPasswordMobileTypePageRoutingModule } from './find-password-mobile-type-routing.module';

import { FindPasswordMobileTypePage } from './find-password-mobile-type.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindPasswordMobileTypePageRoutingModule
  ],
  declarations: [FindPasswordMobileTypePage]
})
export class FindPasswordMobileTypePageModule {}
