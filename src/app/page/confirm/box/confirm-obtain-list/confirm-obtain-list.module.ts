import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmObtainListPageRoutingModule } from './confirm-obtain-list-routing.module';

import { ConfirmObtainListPage } from './confirm-obtain-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ConfirmObtainDetailSearchPageModule } from '../confirm-obtain-detail-search/confirm-obtain-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmObtainListPageRoutingModule,
    ConfirmObtainDetailSearchPageModule
  ],
  declarations: [ConfirmObtainListPage]
})
export class ConfirmObtainListPageModule {}
