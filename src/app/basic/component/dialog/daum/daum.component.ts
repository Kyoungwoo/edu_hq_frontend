import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
declare const daum;

@Component({
  selector: 'app-daum',
  templateUrl: './daum.component.html',
  styleUrls: ['./daum.component.scss'],
})
export class DaumComponent implements OnInit {

  @ViewChild('wrap') wrap:ElementRef;

  constructor(
    private modal: ModalController,
    private file: FileService
  ) { }

  ngOnInit() {}

  async ngAfterViewInit() {
    this.file.script(`https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`).then(() => {
      this.init();
    });
  }

  private async init() {
    const data = await this.postCode();
    this.modal.dismiss(data);
  }

  postCode():Promise<{zoneCode:string, address:string}> {
    return new Promise(res => {
      new daum.Postcode({
        oncomplete: (data) => {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
  
          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수
  
          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
              addr = data.jibunAddress;
          }
  
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if(data.userSelectedType === 'R'){
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          res({
            zoneCode: data.zonecode,//우편번호
            address: addr + extraAddr,//주소 + 참고항목
          });
        },
        // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
        onresize: (size) => {
          this.wrap.nativeElement.style.height = size.height+'px';
        },
        width : '100%',
        height : '100%'
      }).embed(this.wrap.nativeElement);
    });
  }

}
