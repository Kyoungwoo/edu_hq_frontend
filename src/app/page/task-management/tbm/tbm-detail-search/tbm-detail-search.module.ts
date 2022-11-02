import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbmDetailSearchPageRoutingModule } from './tbm-detail-search-routing.module';

import { TbmDetailSearchPage } from './tbm-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    TbmDetailSearchPageRoutingModule
  ],
  declarations: [TbmDetailSearchPage]
})
export class TbmDetailSearchPageModule {}
