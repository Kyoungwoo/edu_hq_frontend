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
import { StorageService } from './storage.service';
import { AlertController } from '@ionic/angular';

export interface ConnectStrategyOptions {
  devUrl:string,
  url:string,
  exceptLogUrls:string[]
}
export const ConnectStrategy = new InjectionToken<ConnectStrategyOptions>('ConnectStrategy');

export interface ConnectResult {
  rsCode:number,
  rsObj:{[name:string]:any} | null,
  rsMsg:string,
  rsMap:any[] | null,
  rqMethod:string,
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
    private storage: StorageService,
    private loading: LoadingService,
    private router: Router,
    private alertController:AlertController
  ) {}

  /** 서버 접속. 기본데이터: platform_type, platform_key, user_id, user_session */
  async run(endPoint, data?:{[name:string]:any}, options:ConnectOptions = { loading: '' }) {
    if(!data) data = {};
    
    const url = (environment.production ? this.connectStrategy.url : this.connectStrategy.devUrl) + endPoint;
    
    const { platform_type, platform_key } = await this.device.get();
    const { user_id, user_session } = await this.user.userData;
    
    data = {
      ...data,
      platform_type, platform_key, user_id, user_session
    }

    if(!environment.production && !this.connectStrategy.exceptLogUrls.includes(url)) {
      console.log({
        url: url,
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
          /* case 0:
            console.log(error);
            return {rsCode: 1, rsObj: error.message, url: '', rqMethod: '', rsMap: null, rsMsg: null, }; */
          default:
            return {rsCode: error.status, rsObj: error.error, rsMsg: error.message, rqMethod: '', rsMap:null, url};
        }
      })()
    }

    result.url = url;

    loading?.dismiss();

    if(!environment.production) console.log(result);

    if(result.rsCode === 400 || result.rsCode === 1002) {
      this.user.clear();
      this.router.navigate(['/login'], {replaceUrl: true});
    } else {
      return result;
    }
  }

  async error(title, res) {
    res.code ? null : res.code = '';
    switch(res.code) {
      case 1002:
      case 2002:
        //ip교체로 인한 세션 마감
        this.storage.user.clear();
        // 퍼블리싱 끝나면 밑에 첫째줄 풀어줘야함
        this.router.navigate(['/admin-web/login'], {replaceUrl: true});
        break;
      default:
        const error = await this.alertController.create({
          // mode: 'ios',
          header: `${title}${res.code && !environment.production ? '['+res.code+']' : ''}`,
          message: res.message,
          buttons: [{
            text: '확인'
          }]
        });
        error.present();
        break;
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

  private changeTestImgUrl(imgUrl):Promise<string> {
    return new Promise(res => {
      let img = document.createElement('img');
      img.onload = () => {
        img = null;
        res(null);
      }
      img.onerror = () => {
        img = null;
        const reg = /https:\/\/www\.kunyoungcms\.com/;
        if(reg.test(imgUrl)) res(imgUrl.replace(reg, 'http://3.35.5.135'));
        else res(null);
      }
      img.src = imgUrl;
    });
  }
}