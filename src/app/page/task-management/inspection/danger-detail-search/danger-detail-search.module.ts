import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerDetailSearchPageRoutingModule } from './danger-detail-search-routing.module';

import { DangerDetailSearchPage } from './danger-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    DangerDetailSearchPageRoutingModule
  ],
  declarations: [DangerDetailSearchPage]
})
export class DangerDetailSearchPageModule {}
