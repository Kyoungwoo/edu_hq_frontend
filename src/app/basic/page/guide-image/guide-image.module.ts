import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideImagePageRoutingModule } from './guide-image-routing.module';

import { GuideImagePage } from './guide-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideImagePageRoutingModule
  ],
  declarations: [GuideImagePage]
})
export class GuideImagePageModule {}
