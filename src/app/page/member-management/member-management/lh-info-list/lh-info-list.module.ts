import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhInfoListPageRoutingModule } from './lh-info-list-routing.module';

import { LhInfoListPage } from './lh-info-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LhInfoListPageRoutingModule
  ],
  declarations: [LhInfoListPage]
})
export class LhInfoListPageModule {}
