import { Component, OnInit } from '@angular/core';
import { listAnimation } from 'src/app/basic/basic.animation';



@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
  animations: [ listAnimation ]
})
export class SearchAreaComponent implements OnInit {
  area11:boolean
  area22:boolean
  area33:boolean

 area1 = [
   {
    ground:'1공구'
   },
   {
    ground:'2공구'
   },
   {
    ground:'3공구'
   }  
]
area2 = [
  {
    building:'101동'
  },
  {
    building:'102동'
  },
  {
    building:'103동'
  }  
]
area3 = [
  {
    floor:'1층'
  },
  {
    floor:'2층'
  },
  {
    floor:'3층'
  }  
]
  constructor() { }

  ngOnInit() {}

}
