import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAppPageRoutingModule } from './login-app-routing.module';

import { LoginAppPage } from './login-app.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAppPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [LoginAppPage]
})
export class LoginAppPageModule {}
