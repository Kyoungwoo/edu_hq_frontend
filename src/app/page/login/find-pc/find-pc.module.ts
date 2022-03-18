import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPcPageRoutingModule } from './find-pc-routing.module';

import { FindPcPage } from './find-pc.page';
import { ComponentModule } from 'src/app/component/component.module';
import { FindPcComponentModule } from './component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindPcComponentModule,
    FindPcPageRoutingModule
  ],
  declarations: [FindPcPage]
})
export class FindPcPageModule {}
