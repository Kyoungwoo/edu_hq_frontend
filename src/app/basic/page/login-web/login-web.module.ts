import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWebPageRoutingModule } from './login-web-routing.module';

import { LoginWebPage } from './login-web.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginWebPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [LoginWebPage]
})
export class LoginWebPageModule {}
