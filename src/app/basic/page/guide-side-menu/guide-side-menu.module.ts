import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideSideMenuPageRoutingModule } from './guide-side-menu-routing.module';

import { GuideSideMenuPage } from './guide-side-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideSideMenuPageRoutingModule
  ],
  declarations: [GuideSideMenuPage]
})
export class GuideSideMenuPageModule {}
