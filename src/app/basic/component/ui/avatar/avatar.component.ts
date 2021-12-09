import { Component, DoCheck, EventEmitter, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, DoCheck {

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
