import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationSelectPageRoutingModule } from './organization-select-routing.module';

import { OrganizationSelectPage } from './organization-select.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    OrganizationSelectPageRoutingModule
  ],
  declarations: [OrganizationSelectPage]
})
export class OrganizationSelectPageModule {}
