import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpTypePageRoutingModule } from './sign-up-type-routing.module';

import { SignUpTypePage } from './sign-up-type.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpTypePageRoutingModule,
    ComponentModule,
    SignUpComponentModule
  ],
  declarations: [SignUpTypePage]
})
export class SignUpTypePageModule {}
