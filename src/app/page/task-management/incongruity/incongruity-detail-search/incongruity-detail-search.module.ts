import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncongruityDetailSearchPageRoutingModule } from './incongruity-detail-search-routing.module';

import { IncongruityDetailSearchPage } from './incongruity-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    IncongruityDetailSearchPageRoutingModule
  ],
  declarations: [IncongruityDetailSearchPage]
})
export class IncongruityDetailSearchPageModule {}
