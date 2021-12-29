import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberStandardSetPageRoutingModule } from './member-standard-set-routing.module';

import { MemberStandardSetPage } from './member-standard-set.page';
import { BasicComponentModule } from 'src/app/basic/component/basic.component.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    BasicComponentModule,
    MemberStandardSetPageRoutingModule
  ],
  declarations: [MemberStandardSetPage]
})
export class MemberStandardSetPageModule {}
