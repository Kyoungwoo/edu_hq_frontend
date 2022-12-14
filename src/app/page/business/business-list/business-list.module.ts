import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';

import { BusinessListPageRoutingModule } from './business-list-routing.module';
import { BusinessListPage } from './business-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BusinessListPageRoutingModule,
  ],
  declarations: [BusinessListPage]
})
export class BusinessListPageModule {}