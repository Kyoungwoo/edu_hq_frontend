import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtwPendingListPageRoutingModule } from './ptw-pending-list-routing.module';

import { PtwPendingListPage } from './ptw-pending-list.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PtwPendingListPageRoutingModule
  ],
  declarations: [PtwPendingListPage]
})
export class PtwPendingListPageModule {}
