import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyStatusListPageRoutingModule } from './my-status-list-routing.module';

import { MyStatusListPage } from './my-status-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { StatusSearchModule } from '../../component/status-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MyStatusListPageRoutingModule,
    StatusSearchModule
  ],
  declarations: [MyStatusListPage]
})
export class MyStatusListPageModule {}
