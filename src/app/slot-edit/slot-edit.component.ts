import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-slot-edit',
  templateUrl: './slot-edit.component.html',
  styleUrls: ['./slot-edit.component.css']
})
export class SlotEditComponent implements OnInit {

  slotList : any = [];

  constructor(
    private route : ActivatedRoute
   
  ) { }

 


  
  

  ngOnInit(): void {
 
  }
  

  onUpdate(){

  }

}
