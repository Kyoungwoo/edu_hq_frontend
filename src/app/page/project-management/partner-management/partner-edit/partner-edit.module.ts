import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerEditPageRoutingModule } from './partner-edit-routing.module';

import { PartnerEditPage } from './partner-edit.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerEditPageRoutingModule
  ],
  declarations: [PartnerEditPage]
})
export class PartnerEditPageModule {}
