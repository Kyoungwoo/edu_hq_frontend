import { Component, DoCheck, EventEmitter, HostBinding, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, DoCheck {

  @HostBinding('style') get style() {
    const _style = [];
    if(this.height) {
      if(this.height.endsWith('px') || this.height.endsWith('%')) _style.push(`height: ${this.height}`);
      else _style.push(`height: ${this.height}px`);
    }
    if(this.width) {
      if(this.width.endsWith('px') || this.width.endsWith('%')) _style.push(`width: ${this.width}`);
      else _style.push(`width: ${this.width}px`);
    }
    return _style.join(';');
  }

  @Input() height:string;
  @Input() width:string;
  @Input() readonly:boolean = true;
  @Input() value:FutItem[] = [];
  @Input() files:(File | FileBlob)[] = [];
  @Input() file_json:FileJson = {
    insert: [],
    update: [],
    delete: []
  };
  @Input() src:string | SafeUrl = null;
  @Output() change:EventEmitter<FileBlob> = new EventEmitter();

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers
  ) { }

  ngOnInit() {
    this.differ = this.differs.find([]).create(null);
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.value);
    if(changes) {
      changes.forEachAddedItem((record) => {
        this.changeAvatar(record.item);
      })
    }
  }

  private changeAvatar(futItem:FutItem) {
    this.src = futItem.file_url;
  }
}
