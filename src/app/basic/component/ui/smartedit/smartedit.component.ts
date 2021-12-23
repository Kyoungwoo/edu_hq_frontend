import { Component, OnInit } from '@angular/core';
declare var nhn:any

@Component({
  selector: 'app-smartedit',
  templateUrl: './smartedit.component.html',
  styleUrls: ['./smartedit.component.scss'],
})
export class SmarteditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.smartEditor();
  }

  smartEditor(){
    let oEditors = [];
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "smartEditor",  //textarea ID 입력
      // sSkinURI: "/libs/smarteditor/SmartEditor2Skin.html",  //martEditor2Skin.html 경로 입력
      sSkinURI: "assets/lib/smartEditor/SmartEditor2Skin.html",  //martEditor2Skin.html 경로 입력
      fCreator: "createSEditor2",
      htParams : { 
        // 툴바 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseToolbar : true, 
        // 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseVerticalResizer : false, 
        // 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseModeChanger : false 
      }
    });
  }
}
