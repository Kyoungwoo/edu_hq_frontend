import { Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FileService, FutItem } from 'src/app/basic/service/core/file.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class SafeJobItem {
  project_id:number = null;
  ctgo_safe_job_id:number = null;
  ctgo_safe_job_name_kr:string = null;
  safe_job_start_date:string = null;
  user_id:number = null;
  user_safe_job_id:number = null;
  safe_job_file:string = null;
  fut_item:FutItem[] = [];
  file:(File|FileBlob)[] = [];
  file_json:FileJson = new FileJson();
}

@Component({
  selector: 'app-input-safejob',
  templateUrl: './input-safejob.component.html',
  styleUrls: ['./input-safejob.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSafejobComponent),
    multi: true
  }]
})
export class InputSafejobComponent implements OnInit, ControlValueAccessor {

  @Input() project_id;
  @Input() company_id;
  @Input() insert_url:string = null;
  @Input() update_url:string = null;
  @Input() delete_url:string = null;
  @Input() params:any = {};
  @Output() load = new EventEmitter();

  removeSafeJobList:SafeJobItem[] = [];

  constructor(
    private file: FileService,
    private connect: ConnectService,
    private loading: LoadingService,
    private toast: ToastService
  ) { }

  ngOnInit() {}

  removeSafeJobItem(item:SafeJobItem, index:number) {
    if(item.user_safe_job_id) {
      // exist item
      this.removeSafeJobList.push(item);
    }
    this.value.splice(index, 1);
  }
  addSafeJobItem() {
    this.value.push(new SafeJobItem());
    console.log(this.value);
  }
  getFileName(url:string) {
    const slash = url?.lastIndexOf('/');
    return url ? url.substring(slash+1, url.length) : '';
  }
  getMimeType(url:string) {
    const dot = url?.lastIndexOf('.');
    return url ? url.substring(dot, url.length) : '';
  }

  setValue(v:SafeJobItem[]) {
    v?.forEach(item => {
      if(!item.fut_item) {
        item.file = [];
        item.file_json = new FileJson();

        if(item.safe_job_file) {
          const file_name = this.getFileName(item.safe_job_file);
          const file_type = this.getMimeType(item.safe_job_file);
          const content_type = this.file.getContentType(item.safe_job_file);
          item.fut_item = [{
            content_type,
            file_name,
            file_size: null,
            file_type,
            full_url: item.safe_job_file,
            order_no: 1,
            seq_no: 1,
            view_type: "JOB"
          }];
        }
        else {
          item.fut_item = [];
        }
      }
    });
    this._value = v;
  }

  async submit() {
    const resAll = await Promise.all([
      this.add(),
      this.update(),
      this.remove()
    ]);
    return resAll.includes(false) ? false : true;
  }
  async add() {
    const insertList = this.value.filter(item => !item.user_safe_job_id);
    for(let i = 0; i < insertList.length; i++) {
      const item = insertList[i];
      const res = await this.connect.run(this.insert_url, {
        ...item,
        project_id: this.project_id,
        ...this.params
      });
      if(res.rsCode) {
        this.toast.present({ color: 'warning', message: res.rsMsg });
        return false;
      }
    }
    return true;
  }
  async update() {
    const updateList = this.value.filter(item => item.user_safe_job_id);
    for(let i = 0; i < updateList.length; i++) {
      const item = updateList[i];
      const res = await this.connect.run(this.update_url, {
        ...item,
        ...this.params
      });
      if(res.rsCode) {
        this.toast.present({ color: 'warning', message: res.rsMsg });
        return false;
      }
    }
    return true;
  }
  async remove() {
    for(let i = 0; i < this.removeSafeJobList.length; i++) {
      const item = this.removeSafeJobList[i];
      const res = await this.connect.run(this.delete_url, {
        user_safe_job_id: item.user_safe_job_id,
        ...this.params
      });
      if(res.rsCode) {
        this.toast.present({ color: 'warning', message: res.rsMsg });
        return false;
      }
    }
    return true;
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;

  @Output() change = new EventEmitter();

  private _value:SafeJobItem[] = [];
  @Input() set value(v:SafeJobItem[]) {
    if(v !== this._value) {
      const _v = v || [];
      this.setValue(_v);
      this.onChangeCallback(_v);
      this.change.emit(_v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:SafeJobItem[]): void { 
    if(v !== this._value) {
      const _v = v || [];
      this.setValue(_v);
      this.onChangeCallback(_v);
      this.change.emit(_v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }

}
