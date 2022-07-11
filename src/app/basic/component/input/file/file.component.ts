import { ToastService } from './../../../service/ionic/toast.service';
import { Component, DoCheck, EventEmitter, forwardRef, HostBinding, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { FileBlob, FileJson, FileService, FutItem } from 'src/app/basic/service/core/file.service';
import { CameraService } from 'src/app/basic/service/native/camera.service';
import { FilePopoverComponent } from '../file-popover/file-popover.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileComponent),
    multi: true
  }]
})
export class FileComponent implements OnInit, DoCheck, ControlValueAccessor {

  @Input() view_type:string;
  @Input() accept:string;
  @Input() multiple:boolean = false;
  @Input() limit:number = null;

  @Input() file:(File | FileBlob)[] = [];
  @Input() file_json:FileJson = {
    insert: [],
    update: [],
    delete: []
  };

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers,
    private fileService: FileService,
    private camera: CameraService,
    private popover: PopoverController,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.differ = this.differs.find([]).create(null);
    if(!this.view_type) {
      console.error('app-file must have view_type attribute!!');
    }
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.value);
    if(changes) {
      changes.forEachRemovedItem((record) => {
        this.fileDelete(record.item);
      })
    }
  }

  changeInputFile($event) {
    if(this.limit){
      if(this.file.length >= this.limit) return this.toast.present({message: this.limit+'개 이상 등록하실수 없습니다.', color: 'warning'});
    }
    const fileList:File[] = Array.from($event.target.files);
    if(!fileList.length) return;
    this.fileAdd(fileList);
    $event.target.value = null;
  }
  async getPhoto($event) {
    if(this.limit){
      if(this.file.length >= this.limit) return this.toast.present({message: this.limit+'개 이상 등록하실수 없습니다.', color: 'warning'});
    }
    const fileIndex = this.value.findIndex(file => file.view_type === this.view_type);

    if(fileIndex > -1) {
      // 기 선택된 파일이 있다면 삭제 여부를 물어봄
      const popover = await this.popover.create({
        component: FilePopoverComponent,
        event: $event
      });
      await popover.present();
      const { data } = await popover.onDidDismiss();
      if(data === 'edit') {
        const blob = await this.camera.getPhoto({
          width: 1024,
          height: 1024
        });
        if(blob) {
          this.fileAdd([blob]);
        }
      } else if(data === 'remove') {
        this.value.splice(fileIndex, 1);
      }
    } else {
      // 기 선택된 파일이 없으면 파일 선택
      const blob = await this.camera.getPhoto({
        width: 1024,
        height: 1024
      });
      if(blob) {
        this.fileAdd([blob]);
      }
    }

  }
  fileAdd(fileList:(File | FileBlob)[]) {
    const existLength = this.value.filter(item => item.seq_no).length;
    if(!this.multiple) {
      const file = fileList[0];
      // let existValueIndex = null;
      // if(this.view_type === 'EDU_ONE' || this.view_type === 'EDU_TWO') existValueIndex = this.value.findIndex(item => item.view_type === 'EDU_ONE' || 'EDU_TWO');
      // else if(this.view_type === 'SAFETY_ONE' || this.view_type === 'SAFETY_TWO') existValueIndex = this.value.findIndex(item => item.view_type === 'SAFETY_ONE' || 'SAFETY_TWO');
      // else 
      const existValueIndex = this.value.findIndex(item => item.view_type === this.view_type);
      if(existValueIndex > -1) this.value.splice(existValueIndex, 1);
      this.fileItemAdd(file, this.view_type, existLength + 1);
    } else {
      for(let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        this.fileItemAdd(file, this.view_type, existLength + i + 1);
      }
    }
    console.log(this.file_json);
  }
  private fileItemAdd(file:File|FileBlob, view_type, order_no) {
    if(view_type === 'EDU_ONE' || view_type === 'SAFETY_ONE') order_no = 1;
    if(view_type === 'EDU_TWO' || view_type === 'SAFETY_TWO') order_no = 2;
    this.value.push({
      content_type: file.type,
      file_name: file.name,
      file_size: file.size,
      file_type: this.fileService.getMimeType(file),
      full_url: this.fileService.createObjectURL(file),
      order_no,
      view_type,
      seq_no: 0
    });
    this.file.push(file);
    this.file_json.insert.push({
      order_no,
      view_type
    });
    
  }

  private fileDelete(item:FutItem) {
    if(item.seq_no) {
      //if use multiple app-file, bubble these events. So need to check existDeleteFile is exist;
      const existDeleteFile = this.file_json.delete.find(file_json => file_json.seq_no === item.seq_no);
      if(existDeleteFile) return;
      this.file_json.delete.push({
        seq_no: item.seq_no
      })
    } else {
      const deleteFileIndex = this.file.findIndex(file => {
        return file.name === item.file_name
        && file.size === item.file_size;
      });
      //if use multiple app-file, bubble these events. So need to check deleateFileIndex is over 0;
      if(deleteFileIndex === -1) return;
      this.file.splice(deleteFileIndex, 1);
    }
    const reorderedList = this.value.map((_item, i) => {
      if(_item.view_type === 'EDU_ONE' || _item.view_type === 'SAFETY_ONE') _item.order_no = 1;
      if(_item.view_type === 'EDU_TWO' || _item.view_type === 'SAFETY_TWO') _item.order_no = 2;
      return {
        seq_no: _item.seq_no,
        order_no: i + 1,
        view_type: _item.view_type
      }
    });
    console.log(reorderedList);
    this.file_json.update = reorderedList.filter(_item => _item.seq_no);
    this.file_json.insert = reorderedList.filter(_item => !_item.seq_no);
    console.log(this.file_json);
  }


  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:FutItem[] = [];
  @Input() set value(v:FutItem[]) {
    if(v !== this._value) {
      this._value = v || [];
      this.onChangeCallback(this._value);
      this.change.emit(this._value);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:FutItem[]): void { 
    if(v !== this._value)  {
      this._value = v || [];
      this.onChangeCallback(this._value);
      this.change.emit(this._value);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
