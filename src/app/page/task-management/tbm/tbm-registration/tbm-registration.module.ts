import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { TbmRegistrationPageRoutingModule } from './tbm-registration-routing.module';
import { TbmRegistrationPage } from './tbm-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TbmRegistrationPageRoutingModule
  ],
  declarations: [TbmRegistrationPage]
})
export class TbmRegistrationPageModule {}