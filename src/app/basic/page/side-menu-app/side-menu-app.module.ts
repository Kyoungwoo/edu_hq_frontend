import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuAppPageRoutingModule } from './side-menu-app-routing.module';

import { SideMenuAppPage } from './side-menu-app.page';
import { UiComponentModule } from '../../component/ui/ui.component.module';
import { BasicComponentModule } from '../../component/basic.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuAppPageRoutingModule,
    BasicComponentModule,
    
  
  ],
  declarations: [SideMenuAppPage]
})
export class SideMenuAppPageModule {}
