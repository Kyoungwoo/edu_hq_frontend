import { Directive, HostListener, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mobileShow]'
})
export class MobileShowDirective {

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 768) {
      if(this.container.length) this.container.clear();
    } else {
      if(!this.container.length) this.container.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    this.onResize();
  }

}
