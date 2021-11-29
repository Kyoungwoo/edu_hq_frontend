import { Component, DoCheck, EventEmitter, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { FileBlob, FileJson, FileService, FutItem } from 'src/app/basic/service/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit, DoCheck {

  @Input() view_type:string;
  @Input() accept:string;
  @Input() multiple:boolean;

  @Input() list:FutItem[] = [];

  @Input() files:(File | FileBlob)[] = [];
  @Input() file_json:FileJson = {
    insert: [],
    update: [],
    delete: []
  };

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers,
    private file: FileService
  ) { }

  ngOnInit() {
    this.differ = this.differs.find([]).create(null);
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.list);
    if(changes) {
      changes.forEachRemovedItem((record) => {
        this.fileDelete(record.item);
      })
    }
  }

  fileAdd($event) {
    const fileList:File[] = Array.from($event.target.files);
    if(!fileList.length) return;

    const existLength = this.list.filter(item => item.seq_no).length;
    for(let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      this.list.push({
        content_type: file.type,
        file_name: file.name,
        file_size: file.size,
        file_type: this.file.getMimeType(file),
        file_url: this.file.createObjectURL(file),
        order_no: existLength + i + 1,
        view_type: this.view_type,
        seq_no: 0
      });
      this.files.push(file);
      this.file_json.insert.push({
        order_no: existLength + i + 1,
        view_type: this.view_type
      })
    }
  }

  private fileDelete(item:FutItem) {
    if(item.seq_no) {
      this.file_json.delete.push({
        seq_no: item.seq_no
      })
    }
    const reorderedList = this.list.map((_item, i) => {
      return {
        seq_no: _item.seq_no,
        order_no: i + 1,
        view_type: _item.view_type
      }
    });
    this.file_json.update = reorderedList.filter(_item => _item.seq_no);
    this.file_json.insert = reorderedList.filter(_item => !_item.seq_no);
    console.log(this.file_json);
  }


  /* deleteFile(item, i) {
    this.view.splice(i, 1);
  }
  upload() {
    this.connect.run('efefe', this.form);
  } */


  /* @Input()
  set value(v) {
    
    if(v !== )
  } */
}
