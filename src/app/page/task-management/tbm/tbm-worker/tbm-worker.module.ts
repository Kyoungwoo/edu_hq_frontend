import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { TbmWorkerPageRoutingModule } from './tbm-worker-routing.module';
import { TbmWorkerPage } from './tbm-worker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TbmWorkerPageRoutingModule
  ],
  declarations: [TbmWorkerPage]
})
export class TbmWorkerPageModule {}