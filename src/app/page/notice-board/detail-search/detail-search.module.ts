import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSearchPageRoutingModule } from './detail-search-routing.module';

import { DetailSearchPage } from './detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DetailSearchPageRoutingModule
  ],
  declarations: [DetailSearchPage]
})
export class DetailSearchPageModule {}
