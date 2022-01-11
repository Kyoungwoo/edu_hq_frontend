import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerInfoListPageRoutingModule } from './partner-info-list-routing.module';

import { PartnerInfoListPage } from './partner-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PartnerInfoListPageRoutingModule
  ],
  declarations: [PartnerInfoListPage]
})
export class PartnerInfoListPageModule {}
