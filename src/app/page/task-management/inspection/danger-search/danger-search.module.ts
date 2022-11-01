import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { DangerSearchPageRoutingModule } from './danger-search-routing.module';
import { DangerSearchPage } from './danger-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    DangerSearchPageRoutingModule,
  ],
  declarations: [DangerSearchPage]
})
export class DangerSearchPageModule {}