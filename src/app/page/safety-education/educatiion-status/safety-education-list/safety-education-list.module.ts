import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyEducationListPageRoutingModule } from './safety-education-list-routing.module';

import { SafetyEducationListPage } from './safety-education-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    SafetyEducationListPageRoutingModule
  ],
  declarations: [SafetyEducationListPage]
})
export class SafetyEducationListPageModule {}
