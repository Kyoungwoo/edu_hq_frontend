import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpCompanyPageRoutingModule } from './sign-up-company-routing.module';

import { SignUpCompanyPage } from './sign-up-company.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpCompanyPageRoutingModule,
    ComponentModule,
    SignUpComponentModule
  ],
  declarations: [SignUpCompanyPage]
})
export class SignUpCompanyPageModule {}
