import { FileBlob, FileJson, FutItem } from "src/app/basic/service/core/file.service";
import { RegexService } from "src/app/basic/service/util/regex.service";
import { SignUpTerms } from "../sign-up.interface";

const regex = new RegexService();

export class SignUpLhForm {
  user_name:string = null; //이름
  account_id:string = null; //아이디
  account_token:string = null; //비밀번호
  account_token_conform:string = null; //account_token_conform
  user_birth:string = null; //생년월일
  user_gender:string = null; //성별
  user_phone:string = null; //휴대폰번호  
  sms_token:string = null; //문자 인증번호
  user_email:string = null; //이메일
  hq_regional_id:number = null; //지역본부 ID
  hq_regional_entire_state: 0|1;
  hq_business_id:number = null; //사업본부 ID
  hq_business_entire_state: 0|1;
  hq_department_id:number = null; //부서 ID
  ctgo_job_position_id:number = null; //직위 ID
  file_preview:FutItem[] = [];
  file:(File|FileBlob)[] = []; //첨부파일
  file_json:FileJson = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
}
export class SignUpLhFormMock implements SignUpLhForm, SignUpTerms {
  user_name:string = regex.random.id('김수홍_lh');; //이름
  account_id:string = regex.random.id('lh'); //아이디
  account_token:string = 'qwer1234'; //비밀번호
  account_token_conform:string = 'qwer1234'; //account_token_conform
  user_birth:string = '1982-07-26'; //생년월일
  user_gender:string = '남'; //성별
  user_phone:string = regex.random.phone(); //'01056044147';//휴대폰번호
  sms_token:string = null; //문자 인증번호
  user_email:string = regex.random.email();; //이메일
  hq_regional_id:number = null; //지역본부 ID
  hq_regional_entire_state: 0|1;
  hq_business_id:number = null; //사업본부 ID
  hq_business_entire_state: 0|1;
  hq_department_id:number = null; //부서 ID
  ctgo_job_position_id:number = null; //직위 ID
  file_preview:FutItem[] = [];
  file:(File|FileBlob)[] = []; //첨부파일
  file_json:FileJson = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증

  system_terms:number = null; // 시스템 이용약관
  personal_terms:number = null; // 개인정보 이용약관
  gps_terms:number = null; // 위치정보 이용약관
  sharing_terms:number = null; // 제 3자 정보제공 이용약관
}