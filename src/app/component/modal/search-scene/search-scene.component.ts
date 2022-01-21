import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

type ProjectSearchType = 'ALL' | null;
export class ProjectItem {
  project_name: string;
  project_id: number;
  project_code: string;
}
@Component({
  selector: 'app-search-scene',
  templateUrl: './search-scene.component.html',
  styleUrls: ['./search-scene.component.scss'],
})
export class SearchSceneComponent implements OnInit {

  @Input() type:ProjectSearchType;

  form = {
    search_text: ''
  }
  res:ConnectResult<ProjectItem>;

  allState:boolean = false;
  selectedItem:ProjectItem;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private _modal : ModalController,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    if(this.type !== 'ALL') {
      this.get();
    }
    if(environment.autoTest) this.test();
  }

  public async test() {
    const el = this.el.nativeElement;

    // 가짜 데이터 삽입
    this.form.search_text = '데브';
    await this.promise.wait();

    // 검색
    el.querySelector('[name=search_text]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait();

    // 가장 위의 현장을 입력
    el.querySelector('[name=project_info]').dispatchEvent(new Event('click'));
    await this.promise.wait();

    // 선택함
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }
  
  async get() {
    if(this.type === 'ALL') {
      this.res = await this.connect.run('/forSignUp/project/get', this.form, { loading: '현장 검색' })
    } else {
      this.res = await this.connect.run('/category/certify/search_my_project/get', this.form, { loading: '현장 검색' });
    }
  }
  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem,
      allState: this.allState
    });
  }
}