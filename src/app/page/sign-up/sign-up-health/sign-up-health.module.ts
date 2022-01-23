import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpHealthPageRoutingModule } from './sign-up-health-routing.module';

import { SignUpHealthPage } from './sign-up-health.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpHealthPageRoutingModule
  ],
  declarations: [SignUpHealthPage]
})
export class SignUpHealthPageModule {}
