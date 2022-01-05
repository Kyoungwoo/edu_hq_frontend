import { AfterViewInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphValueComponent } from '../graph-value/graph-value.component';

@Component({
  selector: 'app-graph-group',
  templateUrl: './graph-group.component.html',
  styleUrls: ['./graph-group.component.scss'],
})
export class GraphGroupComponent implements OnInit, AfterViewInit, OnDestroy  {

  @ContentChildren(GraphValueComponent) graphValueList:QueryList<GraphValueComponent>;

  @Input() color:String;
  @Input() name:String;

  $graphValueList:Subscription;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getValueList();
    this.$graphValueList = this.graphValueList.changes.subscribe(() => {
      this.getValueList();
    });
  }
  ngOnDestroy() {
    this.$graphValueList.unsubscribe();
  }

  getValueList() {
    //console.log(this.graphValueList.toArray());
  }
}
