import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';

@Component({
  selector: 'app-my-page-mileage',
  templateUrl: './my-page-mileage.page.html',
  styleUrls: ['./my-page-mileage.page.scss'],
})
export class MyPageMileagePage implements OnInit {

  /** 안전마일리지 form */
  mileageTotalRes:ConnectResult<{
    minus_mileage:number,
    plus_mileage:number,
    total_mileage:number
  }>;
  mileagePlusRes:ConnectResult<{
    create_date:string,
    ctgo_safe_mileage:string,
    ctgo_safe_mileage_id:number,
    ctgo_safe_mileage_point:number,
    payer_user_id:number,
    payer_user_name:string,
    user_id:number
  }>;
  mileageMinusRes:ConnectResult<{
    create_date:string,
    ctgo_safe_mileage:string,
    ctgo_safe_mileage_id:number,
    ctgo_safe_mileage_point:number,
    payer_user_id:number,
    payer_user_name:string,
    user_id:number
  }>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private _modal: ModalController,
    private nav: NavService,
    public regex: RegexService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.get();
  }

  /** 모두 가져오기 */
  async get() {
    const loading = await this.loading.present();
    /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다. 
     * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
     * 하나의 loading 으로 처리하기 위해서 만들었습니다.
     */
    await Promise.all([
      this.getMileageTotal(),
      this.getMileagePlus(),
      this.getMileageMinus()
    ]);

    loading.dismiss();
  }

  /** 마일리지 정보 가져오기 */
  private async getMileageTotal() {
    this.mileageTotalRes = await this.connect.run('/mypage/mileagetotal/list');
    if(this.mileageTotalRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.mileageTotalRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.mileageTotalRes.rsMsg });
    }
  }
  private async getMileagePlus() {
    this.mileagePlusRes = await this.connect.run('/mypage/mileageplus/list');
    if(this.mileagePlusRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.mileagePlusRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.mileagePlusRes.rsMsg });
    }
  }
  private async getMileageMinus() {
    this.mileageMinusRes = await this.connect.run('/mypage/mileageminus/list');
    if(this.mileageMinusRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.mileageMinusRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.mileageMinusRes.rsMsg });
    }
  }
}
