import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutesListPageRoutingModule } from './minutes-list-routing.module';

import { MinutesListPage } from './minutes-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { MinutesSearchPageModule } from '../minutes-search/minutes-search.module';
import { MinutesEditPageModule } from '../minutes-edit/minutes-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MinutesListPageRoutingModule,
    MinutesSearchPageModule,
    MinutesEditPageModule
  ],
  declarations: [MinutesListPage]
})
export class MinutesListPageModule {}
