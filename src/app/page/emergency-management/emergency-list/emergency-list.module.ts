import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyListPageRoutingModule } from './emergency-list-routing.module';
import { EmergencyListPage } from './emergency-list.page';
import { EmergencyEditPageModule } from '../emergency-edit/emergency-edit.module';
import { EmergencyWarningPageModule } from '../emergency-warning/emergency-warning.module';
import { EmergencyDetailSearchPageModule } from '../emergency-detail-search/emergency-detail-search.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    EmergencyListPageRoutingModule,
    EmergencyEditPageModule,
    EmergencyWarningPageModule,
    EmergencyDetailSearchPageModule
  ],
  declarations: [EmergencyListPage]
})
export class EmergencyListPageModule {}