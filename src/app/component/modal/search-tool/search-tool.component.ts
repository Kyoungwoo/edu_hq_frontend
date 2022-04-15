import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class ToolItem {
  ctgo_tool_id: number;
  ctgo_tool_name: string;
  ctgo_tool_use_state:0|1;
  master_company_id: number;
  project_id: number;
}
@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.scss'],
})
export class SearchToolComponent implements OnInit {

  @Input() form = {
    project_id: 0,
    master_company_id: 0,
    search_text: ''
  }
  @Input() multiple:boolean = false;
  @Input() selectedList:ToolItem[] = [];

  res:ConnectResult<ToolItem>;

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }

  async get() {
    this.res = await this.connect.run('/category/certify/tool/get', this.form, { loading: true });
    if(this.res.rsCode) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  selectItem(item:ToolItem) {
    const itemIndex = this.selectedList.findIndex(selectedItem => selectedItem.ctgo_tool_id ===  item.ctgo_tool_id);
    if(!this.multiple) {
      if(itemIndex > -1) {
        // 있으면 암것도 암함
      }
      else {
        // 없으면 추가
        this.selectedList.push(item);
      }
    }
    else {
      if(itemIndex > -1) {
        // 있으면 뺌
        this.selectedList.splice(itemIndex, 1);
      }
      else {
        // 없으면 추가
        this.selectedList.push(item);
      }
    }
  }
  isSelectedItem(item:ToolItem) {
    return this.selectedList.some(selectedItem => selectedItem.ctgo_tool_id ===  item.ctgo_tool_id);
  }

  submit() {
    this._modal.dismiss({
      selectedList: this.selectedList
    });
  }
}
