import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindIdMobilePhonePageRoutingModule } from './find-id-mobile-phone-routing.module';

import { FindIdMobilePhonePage } from './find-id-mobile-phone.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindIdMobilePhonePageRoutingModule
  ],
  declarations: [FindIdMobilePhonePage]
})
export class FindIdMobilePhonePageModule {}
