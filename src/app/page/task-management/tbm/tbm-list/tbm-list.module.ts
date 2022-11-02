import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { TbmListPageRoutingModule } from './tbm-list-routing.module';
import { TbmListPage } from './tbm-list.page';
import { TbmEditPageModule } from '../tbm-edit/tbm-edit.module';
import { TbmDetailSearchPageModule } from '../tbm-detail-search/tbm-detail-search.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TbmListPageRoutingModule,
    TbmEditPageModule,
    TbmDetailSearchPageModule
  ],
  declarations: [TbmListPage]
})

export class TbmListPageModule {}