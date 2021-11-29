import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileBlob, FileJson, FileService } from 'src/app/basic/service/file.service';
import { CameraOptions, CameraService } from 'src/app/basic/service/native/camera.service';

@Component({
  selector: 'app-input-camera',
  templateUrl: './input-camera.component.html',
  styleUrls: ['./input-camera.component.scss'],
})
export class InputCameraComponent implements OnInit {

  @Input() options:CameraOptions = {
    width: 1080,
    height: 1080
  };

  @Input() viewType:string = "File";
  @Input() set list(fileList:Array<any | File | FileBlob>) {
    if(this.existFileList === fileList) return;

    const deleteFileList = this.existFileList.filter(existFile => {
      return !fileList.some(file => file === existFile);
    });
    const deleteInsertFileList = this.insertFileList.filter(insertFile => {
      return !fileList.some(file => file === insertFile);
    });
    const newExistFileList = fileList?.filter(file => {
      return !this.existFileList.some(existFile => existFile === file) && !file.file;
    });
    const newInsertFileList = fileList?.filter(file => {
      return !this.insertFileList.some(insertFile => insertFile === file)  && file.file;
    });
    if(deleteFileList) this.fileDelete(deleteFileList);
    if(deleteInsertFileList) this.fileDelete(deleteInsertFileList);
    if(newExistFileList) this.existFileList = [...this.existFileList, ...newExistFileList];
    if(newInsertFileList) this.insertFileList = [...this.insertFileList, ...newInsertFileList];
  }
  get list():Array<any | File | FileBlob> {
    return [
      ...this.existFileList,
      ...this.insertFileList
    ]
  }
  @Output() fileChange = new EventEmitter<{ files:Array<File | FileBlob>, file_json:FileJson }>();

  private insertFileList:any[] = [];
  private existFileList:any[] = [];
  private deleteFileList:any[] = [];

  constructor(
    private camera: CameraService,
    private file:FileService
  ) { }

  ngOnInit() {}
  
  async fileAdd() {
    const file = await this.camera.getPhoto(this.options);
    if(!file) return;

    this.insertFileList = [
      ...this.insertFileList,
      {
        file,
        url: this.file.createObjectURL(file)
      }
    ]
    this.changeEmit();
  }

  async fileDelete(fileItem:any | any[]) {
    if(Array.isArray(fileItem)) {
      fileItem.forEach(mfileItem => {
        this.fileDeleteRoof(mfileItem);
      })
    } else {
      this.fileDeleteRoof(fileItem);
    }
    this.changeEmit();
  }
  private fileDeleteRoof(fileItem:any) {
    if(fileItem.file) {
      const insertFileIndex = this.insertFileList.findIndex(insertFile => insertFile === fileItem);
      if(insertFileIndex > -1) {
        this.insertFileList.splice(insertFileIndex, 1)
      } else {
        throw "Can't find file. Please check again user argument";  
      }
    }
    else if(fileItem) {
      const existFileIndex = this.existFileList.findIndex(existFile => existFile === fileItem);
      if(existFileIndex > -1) {
        this.deleteFileList.push(fileItem);
        this.existFileList.splice(existFileIndex, 1);
      } else {
        throw "Can't find file. Please check again user argument";  
      }
    }
    else {
      throw "Can't find file. Please check again user argument";
    }
  }

  private changeEmit() {
    const files = this.insertFileList.map(insertFile => insertFile.file);
    const file_json = {
      insert: [],
      update: [],
      delete: []
    }

    file_json.update = this.existFileList.map((existFile, i) => {
      return {
        seq_no: existFile.seq_no,
        order_no: i,
        view_type: this.viewType
      }
    });
    file_json.insert = this.insertFileList.map((_, i) => {
      return {
        order_no: this.existFileList.length + i,
        view_type: this.viewType,
      }
    });
    file_json.delete = this.deleteFileList;

    this.fileChange.emit({
      files,
      file_json
    })
  }
}