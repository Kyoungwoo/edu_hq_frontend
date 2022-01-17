import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyListPageRoutingModule } from './notify-list-routing.module';

import { NotifyListPage } from './notify-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { OpenDetailSearchPageModule } from '../open-detail-search/open-detail-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NotifyListPageRoutingModule,
    OpenDetailSearchPageModule
  ],
  declarations: [NotifyListPage]
})
export class NotifyListPageModule {}
