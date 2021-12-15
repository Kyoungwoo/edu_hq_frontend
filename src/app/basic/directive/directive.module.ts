import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHiddenDirective } from './mobile-hidden.directive';
import { MobileShowDirective } from './mobile-show.directive';



@NgModule({
  declarations: [
    MobileHiddenDirective,
    MobileShowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileHiddenDirective,
    MobileShowDirective
  ]
})
export class DirectiveModule { }
