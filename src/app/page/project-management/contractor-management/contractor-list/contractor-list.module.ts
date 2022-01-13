import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorListPageRoutingModule } from './contractor-list-routing.module';

import { ContractorListPage } from './contractor-list.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';
import { ContractorEditPageModule } from '../contractor-edit/contractor-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ContractorListPageRoutingModule,
    ContractorEditPageModule
  ],
  declarations: [ContractorListPage]
})
export class ContractorListPageModule {}
