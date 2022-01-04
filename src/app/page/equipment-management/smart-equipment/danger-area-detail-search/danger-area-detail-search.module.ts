import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerAreaDetailSearchPageRoutingModule } from './danger-area-detail-search-routing.module';

import { DangerAreaDetailSearchPage } from './danger-area-detail-search.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    DangerAreaDetailSearchPageRoutingModule
  ],
  declarations: [DangerAreaDetailSearchPage]
})
export class DangerAreaDetailSearchPageModule {}
