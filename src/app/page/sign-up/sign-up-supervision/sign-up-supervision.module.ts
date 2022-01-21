import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpSupervisionPageRoutingModule } from './sign-up-supervision-routing.module';

import { SignUpSupervisionPage } from './sign-up-supervision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpSupervisionPageRoutingModule
  ],
  declarations: [SignUpSupervisionPage]
})
export class SignUpSupervisionPageModule {}
