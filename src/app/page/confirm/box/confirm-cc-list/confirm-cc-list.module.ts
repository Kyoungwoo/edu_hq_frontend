import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCcListPageRoutingModule } from './confirm-cc-list-routing.module';

import { ConfirmCcListPage } from './confirm-cc-list.page';
import { ComponentModule } from 'src/app/component/component.module';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    ConfirmCcListPageRoutingModule
  ],
  declarations: [ConfirmCcListPage]
})
export class ConfirmCcListPageModule {}
