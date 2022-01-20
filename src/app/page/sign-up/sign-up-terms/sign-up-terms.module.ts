import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpTermsPageRoutingModule } from './sign-up-terms-routing.module';

import { SignUpTermsPage } from './sign-up-terms.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { SignUpDonePageModule } from '../sign-up-done/sign-up-done.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpTermsPageRoutingModule,
    SignUpDonePageModule
  ],
  declarations: [SignUpTermsPage]
})
export class SignUpTermsPageModule {}
 