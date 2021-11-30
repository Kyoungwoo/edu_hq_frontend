import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuAppPageRoutingModule } from './side-menu-app-routing.module';

import { SideMenuAppPage } from './side-menu-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuAppPageRoutingModule
  ],
  declarations: [SideMenuAppPage]
})
export class SideMenuAppPageModule {}
