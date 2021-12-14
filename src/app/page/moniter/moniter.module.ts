import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoniterPageRoutingModule } from './moniter-routing.module';

import { MoniterPage } from './moniter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoniterPageRoutingModule
  ],
  declarations: [MoniterPage]
})
export class MoniterPageModule {}
