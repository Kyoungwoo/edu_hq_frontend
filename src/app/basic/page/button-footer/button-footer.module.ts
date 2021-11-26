import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonFooterPageRoutingModule } from './button-footer-routing.module';

import { ButtonFooterPage } from './button-footer.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicComponentModule,
    ButtonFooterPageRoutingModule
  ],
  declarations: [ButtonFooterPage]
})
export class ButtonFooterPageModule {}
