import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictManagementPageRoutingModule } from './district-management-routing.module';

import { DistrictManagementPage } from './district-management.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    DistrictManagementPageRoutingModule
  ],
  declarations: [DistrictManagementPage]
})
export class DistrictManagementPageModule {}
