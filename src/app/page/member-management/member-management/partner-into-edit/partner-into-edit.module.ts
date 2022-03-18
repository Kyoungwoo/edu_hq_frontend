import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerIntoEditPageRoutingModule } from './partner-into-edit-routing.module';

import { PartnerIntoEditPage } from './partner-into-edit.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerIntoEditPageRoutingModule
  ],
  declarations: [PartnerIntoEditPage]
})
export class PartnerIntoEditPageModule {}
