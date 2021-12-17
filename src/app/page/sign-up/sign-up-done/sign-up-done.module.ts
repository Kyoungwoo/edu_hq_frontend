import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpDonePageRoutingModule } from './sign-up-done-routing.module';

import { SignUpDonePage } from './sign-up-done.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpDonePageRoutingModule,
    ComponentModule,
    SignUpComponentModule
  ],
  declarations: [SignUpDonePage]
})
export class SignUpDonePageModule {}
