import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindIdComponent } from './find-id/find-id.component';
import { FindIdResultComponent } from './find-id-result/find-id-result.component';
import { FindPasswordComponent } from './find-password/find-password.component';
import { FindPasswordResultComponent } from './find-password-result/find-password-result.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    FindIdComponent,
    FindIdResultComponent,
    FindPasswordComponent,
    FindPasswordResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  exports: [
    FindIdComponent,
    FindIdResultComponent,
    FindPasswordComponent,
    FindPasswordResultComponent
  ]
})
export class FindPcComponentModule { }
