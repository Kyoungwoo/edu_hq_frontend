import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { TbmEditPageRoutingModule } from './tbm-edit-routing.module';
import { TbmEditPage } from './tbm-edit.page';
import { TbmUnitPageModule } from '../tbm-unit/tbm-unit.module'
import { TbmWorkerPageModule } from '../tbm-worker/tbm-worker.module';
import { TbmRegistrationPageModule } from '../tbm-registration/tbm-registration.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TbmEditPageRoutingModule,
    TbmUnitPageModule,
    TbmWorkerPageModule,
    TbmRegistrationPageModule
  ],
  declarations: [TbmEditPage]
})
export class TbmEditPageModule {}