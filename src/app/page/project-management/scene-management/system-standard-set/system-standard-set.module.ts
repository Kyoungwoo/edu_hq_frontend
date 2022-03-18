import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SystemStandardSetPageRoutingModule } from './system-standard-set-routing.module';
import { SystemStandardSetPage } from './system-standard-set.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SystemStandardSetPageRoutingModule
  ],
  declarations: [SystemStandardSetPage]
})
export class SystemStandardSetPageModule {}
