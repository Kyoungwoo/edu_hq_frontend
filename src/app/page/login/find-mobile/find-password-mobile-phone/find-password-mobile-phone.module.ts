import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPasswordMobilePhonePageRoutingModule } from './find-password-mobile-phone-routing.module';

import { FindPasswordMobilePhonePage } from './find-password-mobile-phone.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindPasswordMobilePhonePageRoutingModule
  ],
  declarations: [FindPasswordMobilePhonePage]
})
export class FindPasswordMobilePhonePageModule {}
