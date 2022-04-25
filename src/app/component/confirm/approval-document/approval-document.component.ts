import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApprovalZoomComponent } from '../approval-zoom/approval-zoom.component';
@Component({
  selector: 'app-approval-document',
  templateUrl: './approval-document.component.html',
  styleUrls: ['./approval-document.component.scss'],
})
export class ApprovalDocumentComponent implements OnInit {

  isDocumentHidden:boolean = false;

  @ViewChild('documentLayout') documentLayout:ElementRef<HTMLElement>;

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  /** 모바일 레이아웃 전용 */
  documentToggle() {
    this.isDocumentHidden = !this.isDocumentHidden;
  }

  async mobilePopup() {
    if(window.innerWidth <= 768) {
      const cloneEl = this.documentLayout.nativeElement.cloneNode(true);
  
      const modal = await this._modal.create({
        component: ApprovalZoomComponent,
        componentProps: {
          zoomEl: cloneEl
        }
      });
      modal.present();
    }
  }
}
