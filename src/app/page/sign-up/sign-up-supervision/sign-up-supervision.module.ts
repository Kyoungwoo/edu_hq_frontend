import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpSupervisionPageRoutingModule } from './sign-up-supervision-routing.module';

import { SignUpSupervisionPage } from './sign-up-supervision.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpSupervisionPageRoutingModule
  ],
  declarations: [SignUpSupervisionPage]
})
export class SignUpSupervisionPageModule {}
