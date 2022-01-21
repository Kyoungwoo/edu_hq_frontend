import { FutItem, FileBlob, FileJson } from "src/app/basic/service/core/file.service";
import { UserGender } from "src/app/basic/service/core/user.service";
import { RegexService } from "src/app/basic/service/util/regex.service";
import { SignUpViewType, SignUpCountryMock, SignUpCompanyInfoMock, SignUpProjectInfoMock } from "../sign-up.interface";

const regex = new RegexService();

export class signUpWorkerInfo {
  account_id:string = null; // 아이디
  account_token:string = null; //비밀번호
  account_token_conform:string = null; //비밀번호 확인
  ctgo_country_id:number = null; //국적 ID
  company_id:number = null; //소속 업체 ID
  project_id:number = null; //소속 현장 ID
  user_name:string = null; //이름
  user_gender:UserGender = null; //성별
  user_birth:string = null; //생년월일
  user_email:string = null; //이메일
  user_phone:string = null;//휴대폰번호
  sms_token:string = null; //문자 인증번호
  basic_safe_edu_date:string = null; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
}
export class SignUpWorkerHealth {
  use_drugs_state:boolean = null; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  use_drugs_content:string = null; //약물명
  brain_cure_state:boolean = null; //심혈관질환 치료여부
  brain_cure_content:string[] = []; //심혈관질환명 / 없을시 빈배열
  vomiting_state:boolean = null; //가슴통증 여부
  vomiting_content:string = null; //가슴통증 내용
  pain_head_state:boolean = null; //두통, 어지러운 증상 여부
  pain_head_content:string = null; //두통, 어지러운 증상 내용
  etc_disease_state:boolean = null; //기타질환 치료여부
  etc_disease_content:string = null; //기타질환 내용
  covid_nineteen_state:boolean = null; //코로나 증상여부
  covid_nineteen_content:string = null; //코로나 증상내용
  covid_vaccine_state:boolean = null; //코로나 백신접종 여부
  health_terms_state:boolean = null; //문진표 작성동의 여부
}
export class SignUpWorkerForm implements signUpWorkerInfo, SignUpWorkerHealth {
  account_id:string = null; // 아이디
  account_token:string = null; //비밀번호
  account_token_conform:string = null; //비밀번호 확인
  ctgo_country_id:number = null; //국적 ID
  company_id:number = null; //소속 업체 ID
  project_id:number = null; //소속 현장 ID
  user_name:string = null; //이름
  user_gender:UserGender = null; //성별
  user_birth:string = null; //생년월일
  user_email:string = null; //이메일
  user_phone:string = null;//휴대폰번호
  sms_token:string = null; //문자 인증번호
  basic_safe_edu_date:string = null; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증

  use_drugs_state:boolean = null; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  use_drugs_content:string = null; //약물명
  brain_cure_state:boolean = null; //심혈관질환 치료여부
  brain_cure_content:string[] = []; //심혈관질환명 / 없을시 빈배열
  vomiting_state:boolean = null; //가슴통증 여부
  vomiting_content:string = null; //가슴통증 내용
  pain_head_state:boolean = null; //두통, 어지러운 증상 여부
  pain_head_content:string = null; //두통, 어지러운 증상 내용
  etc_disease_state:boolean = null; //기타질환 치료여부
  etc_disease_content:string = null; //기타질환 내용
  covid_nineteen_state:boolean = null; //코로나 증상여부
  covid_nineteen_content:string = null; //코로나 증상내용
  covid_vaccine_state:boolean = null; //코로나 백신접종 여부
  health_terms_state:boolean = null; //문진표 작성동의 여부
}

export class signUpWorkerInfoMock implements signUpWorkerInfo {
  constructor(
    country?:SignUpCountryMock,
    company?:SignUpCompanyInfoMock,
    project?:SignUpProjectInfoMock
  ) {
    if(country) this.ctgo_country_id = country.ctgo_country_id;
    if(company) this.company_id = company.company_id;
    if(project) this.project_id = project.project_id;
  }
  account_id:string = regex.random.id('worker'); // 아이디
  account_token:string = 'qwer1234'; //비밀번호
  account_token_conform:string = 'qwer1234'; //비밀번호 확인
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  project_id:number; //소속 현장 ID
  user_name:string = '김수홍'; //이름
  user_gender:UserGender = '남'; //성별
  user_birth:string = '1987-07-26'; //생년월일
  user_email:string = regex.random.email();; //이메일
  user_phone:string = regex.random.phone(); //'01056044147';//휴대폰번호
  sms_token: string = '';
  basic_safe_edu_date:string = null; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
}

export class SignUpWorkerHealthMock implements SignUpWorkerHealth {
  use_drugs_state:boolean = true; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  use_drugs_content:string = '통풍약'; //약물명
  brain_cure_state:boolean = true; //심혈관질환 치료여부
  brain_cure_content:string[] = ['뇌졸중']; //심혈관질환명 / 없을시 빈배열
  vomiting_state:boolean = true; //가슴통증 여부
  vomiting_content:string = '흉통 가끔 있음'; //가슴통증 내용
  pain_head_state:boolean = true; //두통, 어지러운 증상 여부
  pain_head_content:string = '스트레스성 두통'; //두통, 어지러운 증상 내용
  etc_disease_state:boolean = true; //기타질환 치료여부
  etc_disease_content:string = '기타 질환이 가끔 있음'; //기타질환 내용
  covid_nineteen_state:boolean = true; //코로나 증상여부
  covid_nineteen_content:string = '열이 심하게 남. 몸살 없음'; //코로나 증상내용
  covid_vaccine_state:boolean = true; //코로나 백신접종 여부
  health_terms_state:boolean = true; //문진표 작성동의 여부
}