import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerListPageRoutingModule } from './partner-list-routing.module';

import { PartnerListPage } from './partner-list.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    PartnerListPageRoutingModule
  ],
  declarations: [PartnerListPage]
})
export class PartnerListPageModule {}
