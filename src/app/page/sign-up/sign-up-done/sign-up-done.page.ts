import { LanguagePackService } from './../../../basic/service/core/language-pack.service';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up-done',
  templateUrl: './sign-up-done.page.html',
  styleUrls: ['./sign-up-done.page.scss'],
})
export class SignUpDonePage implements OnInit {

  constructor(
    private el: ElementRef<HTMLElement>,
    private _modal: ModalController,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.SignUp.test) return;
    
    await this.promise.wait();
    this._modal.dismiss();
  }

  dismiss() {
    this._modal.dismiss();
  }
}
