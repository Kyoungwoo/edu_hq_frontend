import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPartnerPageRoutingModule } from './sign-up-partner-routing.module';

import { SignUpPartnerPage } from './sign-up-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPartnerPageRoutingModule
  ],
  declarations: [SignUpPartnerPage]
})
export class SignUpPartnerPageModule {}
