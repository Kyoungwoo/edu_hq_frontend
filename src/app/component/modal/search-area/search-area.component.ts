import { Component, OnInit } from '@angular/core';
import { listAnimation } from 'src/app/basic/basic.animation';



@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
  animations: [ listAnimation ]
})
export class SearchAreaComponent implements OnInit {
  toggle:boolean
 area = [
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
  constructor() { }

  ngOnInit() {}

}
