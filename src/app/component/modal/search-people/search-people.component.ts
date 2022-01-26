import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss'],
})
export class SearchPeopleComponent implements OnInit {

  ctgoConstuctionItem:ConnectResult <{
    ctgo_construction_id: number,
    ctgo_construction_name: string,
    project_id:number 
  }>
  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.ctgoConstruction();
  }

  async ctgoConstruction() {
    this.ctgoConstuctionItem = await this.connect.run('/category/construction/get',{company_id:1});
    if(this.ctgoConstuctionItem.rsCode === 9 ) {
      console.log(this.ctgoConstuctionItem)
    }
  }
}
