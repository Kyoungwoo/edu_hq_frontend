import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { PtwListPageRoutingModule } from './ptw-list-routing.module';
import { PtwListPage } from './ptw-list.page';
import { PtwEditPageModule } from '../ptw-edit/ptw-edit.module';
import { PtwPendingListPageModule } from '../ptw-pending-list/ptw-pending-list.module';
import { PtwDetailSearchPageModule } from '../ptw-detail-search/ptw-detail-search.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PtwListPageRoutingModule,
    PtwEditPageModule,
    PtwPendingListPageModule,
    PtwDetailSearchPageModule
  ],
  declarations: [PtwListPage]
})
export class PtwListPageModule {}