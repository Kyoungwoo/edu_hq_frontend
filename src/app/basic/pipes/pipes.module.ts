import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [SafePipe, SafeUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [SafePipe]
})
export class PipesModule { }
