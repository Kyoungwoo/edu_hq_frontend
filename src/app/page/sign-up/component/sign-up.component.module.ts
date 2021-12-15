import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpSegmentComponent } from './sign-up-segment/sign-up-segment.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    SignUpSegmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  exports: [
    SignUpSegmentComponent
  ]
})
export class SignUpComponentModule { }
