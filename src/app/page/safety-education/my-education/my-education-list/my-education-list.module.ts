import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEducationListPageRoutingModule } from './my-education-list-routing.module';

import { MyEducationListPage } from './my-education-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { MyEducationDetailListPage } from '../my-education-detail-list/my-education-detail-list.page';
import { MyEducationDetailListPageModule } from '../my-education-detail-list/my-education-detail-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MyEducationListPageRoutingModule,
    MyEducationDetailListPageModule
  ],
  declarations: [MyEducationListPage]
})
export class MyEducationListPageModule {}
