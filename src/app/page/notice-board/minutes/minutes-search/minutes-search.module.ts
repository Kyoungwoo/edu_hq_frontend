import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutesSearchPageRoutingModule } from './minutes-search-routing.module';

import { MinutesSearchPage } from './minutes-search.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MinutesSearchPageRoutingModule
  ],
  declarations: [MinutesSearchPage]
})
export class MinutesSearchPageModule {}
