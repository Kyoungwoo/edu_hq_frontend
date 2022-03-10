import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPagePageRoutingModule } from './my-page-routing.module';

import { MyPagePage } from './my-page.page';
import { ComponentModule } from 'src/app/component/component.module';
import { ChangePasswordPageModule } from '../change-password/change-password.module';
import { ChangePhonePageModule } from '../change-phone/change-phone.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MyPagePageRoutingModule,
    ChangePasswordPageModule,
    ChangePhonePageModule
  ],
  declarations: [MyPagePage]
})
export class MyPagePageModule {}
