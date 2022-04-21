import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsdsSearchPageRoutingModule } from './msds-search-routing.module';

import { MsdsSearchPage } from './msds-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MsdsSearchPageRoutingModule
  ],
  declarations: [MsdsSearchPage]
})
export class MsdsSearchPageModule {}
