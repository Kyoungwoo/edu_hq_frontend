import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpWorkerPageRoutingModule } from './sign-up-worker-routing.module';

import { SignUpWorkerPage } from './sign-up-worker.page';
import { SignUpComponentModule } from '../component/sign-up.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpComponentModule,
    SignUpWorkerPageRoutingModule
  ],
  declarations: [SignUpWorkerPage]
})
export class SignUpWorkerPageModule {}
