import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPartnerPageRoutingModule } from './sign-up-partner-routing.module';

import { SignUpPartnerPage } from './sign-up-partner.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpPartnerPageRoutingModule,
  ],
  declarations: [SignUpPartnerPage]
})
export class SignUpPartnerPageModule {}
