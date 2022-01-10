import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEducationListPageRoutingModule } from './my-education-list-routing.module';

import { MyEducationListPage } from './my-education-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MyEducationListPageRoutingModule
  ],
  declarations: [MyEducationListPage]
})
export class MyEducationListPageModule {}
