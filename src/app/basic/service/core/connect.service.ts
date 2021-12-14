import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { DeviceService } from './device.service';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { FileBlob, FileService } from 'src/app/basic/service/core/file.service';
import { LoadingService } from '../ionic/loading.service';

export interface ConnectStrategyOptions {
  devUrl:string,
  url:string,
  exceptLogUrls:string[]
}
export const ConnectStrategy = new InjectionToken<ConnectStrategyOptions>('ConnectStrategy');

export interface ConnectResult {
  resultCode:number,
  resultHash:{[name:string]:any} | null,
  resultListHash:{[name:string]:any}[] | null,
  resultReference:string | null,
  url?:string
}

export interface ConnectOptions {
  loading?:string
}

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    @Inject(ConnectStrategy) private connectStrategy:ConnectStrategyOptions,
    private http: HttpClient,
    private file: FileService,
    private device: DeviceService,
    private user: UserService,
    private loading: LoadingService,
    private router: Router
  ) {}

  /** 서버 접속. 기본데이터: platform_type, platform_key, user_id, user_session */
  async run(method, data?:{[name:string]:any}, options:ConnectOptions = { loading: '' }) {
    if(!data) data = {};
    
    const url = (environment.production ? this.connectStrategy.url : this.connectStrategy.devUrl) + method;
    
    const { platform_type, platform_key } = await this.device.get();
    const { user_id, user_session } = await this.user.userData;
    
    data = {
      ...data,
      platform_type, platform_key, user_id, user_session
    }

    if(!environment.production && !this.connectStrategy.exceptLogUrls.includes(url)) {
      console.log({
        method: url,
        ...data
      });
    }
    let body = this.jsonToForm(data);
    let headers = new HttpHeaders();
    let result:ConnectResult;

    let loading:HTMLIonLoadingElement;
    if(!isPlatformServer(this.platformId)) {
      if(options.loading) {
        loading = await this.loading.present({
          message: options.loading
        });
        await loading.present();
      }
    }

    try {
      const http = await this.http.post(url, body, { headers })
      .pipe(timeout(60000))
      .toPromise() as ConnectResult;
      result = http;
    } catch(error) {
      result = (() => {
        switch(error.status) {
          case 0:
            return {resultCode: 1, resultHash: error.message, resultListHash:null, resultReference: '인터넷 연결을 확인해주세요.', url: ''};
          default:
            return {resultCode: error.status, resultHash: error.error, resultListHash:null, resultReference: error.message, url: ''};
        }
      })()
    }

    result.url = method;

    loading?.dismiss();

    if(!environment.production) console.log(result);

    if(result.resultCode === 400 || result.resultCode === 1002) {
      this.user.clear();
      this.router.navigate(['/login'], {replaceUrl: true});
    } else {
      return result;
    }
  }

  private jsonToForm(json) {
    let form = new FormData();
    for(let key in json) {
      if(typeof json[key] !== 'object') form.append(key, json[key]);
      
      else if(json[key] === null || json[key] === undefined) form.append(key, json[key]);

      else if(json[key].constructor.name !== 'Array') {

        if(json[key].constructor.name == 'File') form.append(key, json[key]);

        else if (json[key].constructor.name == 'Blob') {
          const fileName = `attaches_${new Date().getTime()}`;
          form.append(key, json[key], fileName + this.file.getMimeType(json[key]));
        }

        else form.append(key, JSON.stringify(json[key]));
      }
      
      else { // Array
        if(typeof json[key][0] === 'object') {
          
          if(json[key][0].constructor.name == 'File') json[key].forEach(value => form.append(key, value));
  
          else if (json[key][0].constructor.name == 'Blob') {
            json[key].forEach((value:FileBlob) => {
              const fileName = `attaches_${new Date().getTime()}`;
              form.append(key, value, fileName + this.file.getMimeType(value));
            });
          }
          else form.append(key, JSON.stringify(json[key]));
        } 
        else {
          form.append(key, JSON.stringify(json[key]));
        }
      }
    }
    return form;
  }
}