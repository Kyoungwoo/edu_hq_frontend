import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmObtainDetailSearchPageRoutingModule } from './confirm-obtain-detail-search-routing.module';

import { ConfirmObtainDetailSearchPage } from './confirm-obtain-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmObtainDetailSearchPageRoutingModule
  ],
  declarations: [ConfirmObtainDetailSearchPage]
})
export class ConfirmObtainDetailSearchPageModule {}
