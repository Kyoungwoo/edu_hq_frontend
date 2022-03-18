import { Directive, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mobileHidden]'
})
export class MobileHiddenDirective {

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 768) {
      if(!this.container.length) this.container.createEmbeddedView(this.templateRef);
    } else {
      if(this.container.length) this.container.clear();
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) { 
    this.onResize();
  }

}
