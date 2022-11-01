import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyDetailSearchPageRoutingModule } from './emergency-detail-search-routing.module';

import { EmergencyDetailSearchPage } from './emergency-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    EmergencyDetailSearchPageRoutingModule
  ],
  declarations: [EmergencyDetailSearchPage]
})
export class EmergencyDetailSearchPageModule {}
