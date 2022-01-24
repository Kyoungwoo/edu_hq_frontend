import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpLhPageRoutingModule } from './sign-up-lh-routing.module';

import { SignUpLhPage } from './sign-up-lh.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpLhPageRoutingModule
  ],
  declarations: [SignUpLhPage]
})
export class SignUpLhPageModule {}
