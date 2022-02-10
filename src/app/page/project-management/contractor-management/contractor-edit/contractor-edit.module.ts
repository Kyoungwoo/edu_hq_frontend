import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorEditPageRoutingModule } from './contractor-edit-routing.module';

import { ContractorEditPage } from './contractor-edit.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ContractorEditPageRoutingModule
  ],
  declarations: [ContractorEditPage]
})
export class ContractorEditPageModule {}
