import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpDonePageRoutingModule } from './sign-up-done-routing.module';

import { SignUpDonePage } from './sign-up-done.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpDonePageRoutingModule
  ],
  declarations: [SignUpDonePage]
})
export class SignUpDonePageModule {}
