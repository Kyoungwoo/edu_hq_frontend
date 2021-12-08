import { Component, DoCheck, EventEmitter, Input, IterableDiffer, IterableDiffers, OnInit, Output } from '@angular/core';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/file.service';
import { CameraService } from 'src/app/basic/service/native/camera.service';

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
  @Input() src:string = null;
  @Output() change:EventEmitter<FileBlob> = new EventEmitter();

  private differ:IterableDiffer<any>;
  constructor(
    private differs: IterableDiffers,
    private camera: CameraService
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

  async profileClick() {
    const blob = await this.camera.getPhoto({
      width: 320,
      height: 320
    });
    this.change.emit(blob);
  }

}
