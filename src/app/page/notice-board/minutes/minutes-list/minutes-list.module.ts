import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutesListPageRoutingModule } from './minutes-list-routing.module';

import { MinutesListPage } from './minutes-list.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MinutesListPageRoutingModule
  ],
  declarations: [MinutesListPage]
})
export class MinutesListPageModule {}
