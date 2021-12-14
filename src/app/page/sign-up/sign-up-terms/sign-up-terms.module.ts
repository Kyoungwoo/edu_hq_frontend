import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpTermsPageRoutingModule } from './sign-up-terms-routing.module';

import { SignUpTermsPage } from './sign-up-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpTermsPageRoutingModule
  ],
  declarations: [SignUpTermsPage]
})
export class SignUpTermsPageModule {}
