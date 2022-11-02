import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { IncongruityNeedPageRoutingModule } from './incongruity-need-routing.module';
import { IncongruityNeedPage } from './incongruity-need.page';
import { IncongruityEditPageModule } from '../incongruity-edit/incongruity-edit.module';
import { IncongruityDetailSearchPageModule } from '../incongruity-detail-search/incongruity-detail-search.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    IncongruityNeedPageRoutingModule,
    IncongruityEditPageModule,
    IncongruityDetailSearchPageModule
  ],
  declarations: [IncongruityNeedPage]
})
export class IncongruityNeedPageModule {}