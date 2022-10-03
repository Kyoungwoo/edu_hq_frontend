import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaUserRegistrationPageRoutingModule } from './danger-area-user-registration-routing.module';

import { ComponentModule } from 'src/app/component/component.module';
import { DangerAreaUserRegistrationPage } from './danger-area-user-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ComponentModule,
    DangerAreaUserRegistrationPageRoutingModule
  ],
  declarations: [DangerAreaUserRegistrationPage],
  exports: [DangerAreaUserRegistrationPage]
})
export class DangerAreaUserRegistrationPageModule {}
