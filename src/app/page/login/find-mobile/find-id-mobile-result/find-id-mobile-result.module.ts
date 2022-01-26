import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindIdMobileResultPageRoutingModule } from './find-id-mobile-result-routing.module';

import { FindIdMobileResultPage } from './find-id-mobile-result.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindIdMobileResultPageRoutingModule
  ],
  declarations: [FindIdMobileResultPage]
})
export class FindIdMobileResultPageModule {}
