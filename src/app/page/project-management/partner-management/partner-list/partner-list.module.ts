import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerListPageRoutingModule } from './partner-list-routing.module';

import { PartnerListPage } from './partner-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { PartnerEditPageModule } from '../partner-edit/partner-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerListPageRoutingModule,
    PartnerEditPageModule
  ],
  declarations: [PartnerListPage]
})
export class PartnerListPageModule {}
