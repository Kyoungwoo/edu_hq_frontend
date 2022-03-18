import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPasswordMobileResultPageRoutingModule } from './find-password-mobile-result-routing.module';

import { FindPasswordMobileResultPage } from './find-password-mobile-result.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FindPasswordMobileResultPageRoutingModule
  ],
  declarations: [FindPasswordMobileResultPage]
})
export class FindPasswordMobileResultPageModule {}
