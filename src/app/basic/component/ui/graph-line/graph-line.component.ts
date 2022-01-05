import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphGroupComponent } from '../graph-group/graph-group.component';

@Component({
  selector: 'app-graph-line',
  templateUrl: './graph-line.component.html',
  styleUrls: ['./graph-line.component.scss'],
})
export class GraphLineComponent implements OnInit, AfterViewInit, OnDestroy {

  @ContentChildren(GraphGroupComponent) graphGroupList:QueryList<GraphGroupComponent>;

  @ViewChild('graph') graph:ElementRef<SVGElement>;

  viewBox = '0 0 100 100';
  lineList:string[] = [];
  xLabelList:(string|number)[] = [];

  detailBarTransform;
  detailCardTransform;
  
  $graphGroupList:Subscription;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getGroupList();
    this.$graphGroupList = this.graphGroupList.changes.subscribe(() => {
      this.getGroupList();
    });
    //this.graph.nativeElement.add
  }
  ngOnDestroy() {
    this.$graphGroupList.unsubscribe();
  }

  getGroupList() {
    const graphGroupList = this.graphGroupList.toArray();
    let yMax = 0;
    let labelList = [];
    
    graphGroupList.forEach(graphGroup => {
      const graphValueList = graphGroup.graphValueList.toArray();

      if(graphValueList.length > 1) {
        let valueList = [];
        graphValueList.forEach((graphValue, i) => {
          const x = i/(graphValueList.length-1);
          yMax = Math.max(yMax, graphValue.value * 1.1);

          labelList.push(graphValue.label);
          
          valueList.push(`${x*100} ${graphValue.value}`);
        });
        const valueStringList = valueList.join(' L');        
        this.lineList.push(`M${valueStringList}`);
      }
    });

    this.xLabelList = labelList;
    this.viewBox = `0 0 100 ${yMax}`;
  }
  mouseMove($event:MouseEvent) {
    const graphRect = this.graph.nativeElement.getBoundingClientRect();
    this.detailBarTransform = `translate3d(${$event.pageX - graphRect.left}px, 0, 0)`;
    this.detailCardTransform = `translate3d(${$event.pageX - graphRect.left}px, ${$event.pageY - graphRect.top}px, 0)`;
  }
  mouseOut() {
    this.detailBarTransform = null;
    this.detailCardTransform = null;
  }
}
