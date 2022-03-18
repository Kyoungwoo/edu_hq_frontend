import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenDetailSearchPageRoutingModule } from './open-detail-search-routing.module';

import { OpenDetailSearchPage } from './open-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    OpenDetailSearchPageRoutingModule
  ],
  declarations: [OpenDetailSearchPage]
})
export class OpenDetailSearchPageModule {}
