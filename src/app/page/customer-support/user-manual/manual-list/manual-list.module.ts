import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualListPageRoutingModule } from './manual-list-routing.module';

import { ManualListPage } from './manual-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualListPageRoutingModule
  ],
  declarations: [ManualListPage]
})
export class ManualListPageModule {}
