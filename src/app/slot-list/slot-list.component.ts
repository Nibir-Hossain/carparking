import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css']
})
export class SlotListComponent implements OnInit {

  slotList : any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage)

    for (let i = 0; i < localStorage.length; i++)
    {
      let key : any = localStorage.key(i);
      let value : any = localStorage.getItem(key);

      this.slotList.push(JSON.parse(value));
      console.log(key, value, this.slotList)
    }

  }

}
