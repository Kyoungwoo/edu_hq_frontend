import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuWebPageRoutingModule } from './side-menu-web-routing.module';

import { SideMenuWebPage } from './side-menu-web.page';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuWebPageRoutingModule,
    BasicComponentModule
  ],
  declarations: [SideMenuWebPage]
})
export class SideMenuWebPageModule {}
