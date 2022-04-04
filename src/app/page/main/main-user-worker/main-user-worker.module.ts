import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainUserWorkerPageRoutingModule } from './main-user-worker-routing.module';

import { MainUserWorkerPage } from './main-user-worker.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainUserWorkerPageRoutingModule
  ],
  declarations: [MainUserWorkerPage]
})
export class MainUserWorkerPageModule {}
