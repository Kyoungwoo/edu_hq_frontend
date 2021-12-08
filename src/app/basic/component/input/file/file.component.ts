import { Component, DoCheck, Input, IterableDiffer, IterableDiffers, OnInit } from '@angular/core';
import { FileBlob, FileJson, FileService, FutItem } from 'src/app/basic/service/file.service';
import { CameraService } from 'src/app/basic/service/native/camera.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit, DoCheck {

  @Input() view_type:string;
  @Input() accept:string;
  @Input() multiple:boolean = false;
  @Input() disabled:boolean;

  @Input() value:FutItem[] = [];

  @Input() files:(File | FileBlob)[] = [];
  @Input() file_json:FileJson = {
    insert: [],
    update: [],
    delete: []
  };

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers,
    private file: FileService,
    private camera: CameraService
  ) { }

  ngOnInit() {
    this.differ = this.differs.find([]).create(null);
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
    const fileList:File[] = Array.from($event.target.files);
    if(!fileList.length) return;

    this.fileAdd(fileList);
    $event.target.value = null;
  }
  async getPhoto() {
    const blob = await this.camera.getPhoto({
      width: 1024,
      height: 1024
    });
    if(blob) {
      this.fileAdd([blob]);
    }
  }
  fileAdd(fileList:(File | FileBlob)[]) {
    const existLength = this.value.filter(item => item.seq_no).length;
    if(!this.multiple) {
      const file = fileList[0];
      const existValueIndex = this.value.findIndex(item => item.view_type === this.view_type);
      if(existValueIndex > -1) this.value.splice(existValueIndex, 1);
      this.fileItemAdd(file, this.view_type, existLength + 1);
    } else {
      for(let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        this.fileItemAdd(file, this.view_type, existLength + i + 1);
      }
    }
  }
  private fileItemAdd(file:File|FileBlob, view_type, order_no) {
    this.value.push({
      content_type: file.type,
      file_name: file.name,
      file_size: file.size,
      file_type: this.file.getMimeType(file),
      file_url: this.file.createObjectURL(file),
      order_no,
      view_type,
      seq_no: 0
    });
    this.files.push(file);
    this.file_json.insert.push({
      order_no,
      view_type
    })
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
      const deleteFileIndex = this.files.findIndex(file => {
        return file.name === item.file_name
        && file.size === item.file_size;
      });
      //if use multiple app-file, bubble these events. So need to check deleateFileIndex is over 0;
      if(deleteFileIndex === -1) return;
      this.files.splice(deleteFileIndex, 1);
    }
    const reorderedList = this.value.map((_item, i) => {
      return {
        seq_no: _item.seq_no,
        order_no: i + 1,
        view_type: _item.view_type
      }
    });
    this.file_json.update = reorderedList.filter(_item => _item.seq_no);
    this.file_json.insert = reorderedList.filter(_item => !_item.seq_no);
  }
}
