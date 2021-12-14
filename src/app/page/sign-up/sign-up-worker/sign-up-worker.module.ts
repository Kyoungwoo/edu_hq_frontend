import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpWorkerPageRoutingModule } from './sign-up-worker-routing.module';

import { SignUpWorkerPage } from './sign-up-worker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpWorkerPageRoutingModule
  ],
  declarations: [SignUpWorkerPage]
})
export class SignUpWorkerPageModule {}
