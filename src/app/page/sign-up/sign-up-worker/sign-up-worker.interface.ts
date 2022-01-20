import { FutItem, FileBlob, FileJson } from "src/app/basic/service/core/file.service";
import { UserGender } from "src/app/basic/service/core/user.service";

/** PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증 */
export type SignUpViewType = 'PROFILE'|'BASIC_SAFE_EDU'|'CERTIFY';
export class SignUpWorkerInfo {
  account_id:string; // 아이디
  account_token:string; //비밀번호
  account_token_conform:string; //비밀번호 확인
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  project_id:number; //소속 현장 ID
  user_name:string; //이름
  user_gender:UserGender; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
}
export class SignUpWorkerHealth {
  use_drugs_state:boolean; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  use_drugs_content:string; //약물명
  brain_cure_state:boolean; //심혈관질환 치료여부
  brain_cure_content:string[] = []; //심혈관질환명 / 없을시 빈배열
  vomiting_state:boolean; //가슴통증 여부
  vomiting_content:string; //가슴통증 내용
  pain_head_state:boolean; //두통, 어지러운 증상 여부
  pain_head_content:string; //두통, 어지러운 증상 내용
  etc_disease_state:boolean; //기타질환 치료여부
  etc_disease_content:string; //기타질환 내용
  covid_nineteen_state:boolean; //코로나 증상여부
  covid_nineteen_content:string; //코로나 증상내용
  covid_vaccine_state:boolean; //코로나 백신접종 여부
  health_terms_state:boolean; //문진표 작성동의 여부
}
export class SignUpWorkerForm implements SignUpWorkerInfo, SignUpWorkerHealth {
  account_id:string; // 아이디
  account_token:string; //비밀번호
  account_token_conform:string; //비밀번호 확인
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  project_id:number; //소속 현장 ID
  user_name:string; //이름
  user_gender:UserGender; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증

  brain_cure_content:string[]; //심혈관질환명 / 없을시 빈배열
  brain_cure_state:boolean; //심혈관질환 치료여부
  covid_nineteen_content:string; //코로나 증상내용
  covid_nineteen_state:boolean; //코로나 증상여부
  covid_vaccine_state:boolean; //코로나 백신접종 여부
  etc_disease_content:string; //기타질환 내용
  etc_disease_state:boolean; //기타질환 치료여부
  health_terms_state:boolean; //문진표 작성동의 여부
  pain_head_content:string; //신경계질환 내용
  pain_head_state:boolean; //신경계질환 여부
  use_drugs_content:string; //약물명
  use_drugs_state:boolean; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  vomiting_content:string; //가슴통증 내용
  vomiting_state:boolean; //가슴통증 여부
}

export class SignUpWorkerInfoMock extends SignUpWorkerInfo {
  account_id:string = 'worker_sh'; // 아이디
  account_token:string = 'qwer1234'; //비밀번호
  account_token_conform:string = 'qwer1234'; //비밀번호 확인
  ctgo_country_id:number = 1; //국적 ID
  company_id:number = 1; //소속 업체 ID
  project_id:number = 61; //소속 현장 ID
  user_name:string = '김수홍'; //이름
  user_gender:UserGender = '남'; //성별
  user_birth:string = '1987-07-26'; //생년월일
  user_email:string = 'aldegad@naver.com'; //이메일
  user_phone:string = '01056044147';//휴대폰번호
}

export class SignUpWorkerHealthMock extends SignUpWorkerHealth {
  brain_cure_content:string[] = []; //심혈관질환명 / 없을시 빈배열
  brain_cure_state:boolean; //심혈관질환 치료여부
  covid_nineteen_content:string; //코로나 증상내용
  covid_nineteen_state:boolean; //코로나 증상여부
  covid_vaccine_state:boolean; //코로나 백신접종 여부
  etc_disease_content:string; //기타질환 내용
  etc_disease_state:boolean; //기타질환 치료여부
  health_terms_state:boolean; //문진표 작성동의 여부
  pain_head_content:string; //신경계질환 내용
  pain_head_state:boolean; //신경계질환 여부
  use_drugs_content:string; //약물명
  use_drugs_state:boolean; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  vomiting_content:string; //가슴통증 내용
  vomiting_state:boolean; //가슴통증 여부
}