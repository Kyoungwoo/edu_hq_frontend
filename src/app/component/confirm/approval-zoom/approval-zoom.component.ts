import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
declare var panzoom;

@Component({
  selector: 'app-approval-zoom',
  templateUrl: './approval-zoom.component.html',
  styleUrls: ['./approval-zoom.component.scss'],
})
export class ApprovalZoomComponent implements OnInit, AfterViewInit {

  @Input() zoomEl:HTMLElement;

  @ViewChild('zoomContainer') zoomContainer:ElementRef<HTMLElement>;

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.zoomContainer.nativeElement.appendChild(this.zoomEl);
    panzoom(this.zoomEl, {
      maxZoom: 5,
      minZoom: 1
    });
  }

  dismiss() {
    this._modal.dismiss();
  }
}
