import { Component, OnInit } from '@angular/core';
import { FileBlob, FutItem } from 'src/app/basic/service/core/file.service';

export class MenualUpdateForm {
  ctgo_manual_id:number = null; // 구분 ID
  manual_id:number = null; // 사용자 매뉴얼 ID
  manual_title:string = null; // 제목
  manual_text:string = null; // 내용
  manual_file:(File|FileBlob)[] = []; // FILE
  manual_json:string = null; // JSON

  create_user_id: number;
  create_user_name: string;
  create_date: string;
  company_id: number;
  pin_state: number;
  manual_views: number;
  update_user_id: string;
  update_user_name: string;
  update_date: string;
  manual_file_data: FutItem[];
}
@Component({
  selector: 'app-manual-edit',
  templateUrl: './manual-edit.page.html',
  styleUrls: ['./manual-edit.page.scss'],
})
export class ManualEditPage implements OnInit {

  form = new MenualUpdateForm();

  constructor() { }

  ngOnInit() {
  }

}
