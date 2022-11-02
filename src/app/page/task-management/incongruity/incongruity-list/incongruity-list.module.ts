import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { IncongruityListPageRoutingModule } from './incongruity-list-routing.module';
import { IncongruityListPage } from './incongruity-list.page';
import { IncongruityEditPageModule } from '../incongruity-edit/incongruity-edit.module';
import { IncongruityDetailSearchPageModule } from '../incongruity-detail-search/incongruity-detail-search.module';
import { IncongruityNeedPageModule } from '../incongruity-need/incongruity-need.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    IncongruityListPageRoutingModule,
    IncongruityEditPageModule,
    IncongruityDetailSearchPageModule,
    IncongruityNeedPageModule
  ],
  declarations: [IncongruityListPage]
})
export class IncongruityListPageModule {}