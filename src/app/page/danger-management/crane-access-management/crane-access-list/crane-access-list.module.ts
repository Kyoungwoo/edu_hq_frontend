import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraneAccessListPageRoutingModule } from './crane-access-list-routing.module';

import { CraneAccessListPage } from './crane-access-list.page';
import { DirectiveModule } from 'src/app/basic/directive/directive.module';
import { ComponentModule } from 'src/app/component/component.module';
import { CraneAccessDetailPageModule } from '../crane-access-detail/crane-access-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    CraneAccessListPageRoutingModule,
    CraneAccessDetailPageModule,
  ],
  declarations: [CraneAccessListPage],
})
export class CraneAccessListPageModule {}
