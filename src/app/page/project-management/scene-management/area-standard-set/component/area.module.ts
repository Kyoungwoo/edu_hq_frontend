import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';
import { NfcInfoComponent } from './nfc-info/nfc-info.component';



@NgModule({
  declarations: [
    NfcInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule

  ],
  exports:[
    NfcInfoComponent
  ]
})
export class AreaModule { }
