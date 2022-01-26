import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-slot-form',
  templateUrl: './slot-form.component.html',
  styleUrls: ['./slot-form.component.css']
})
export class SlotFormComponent implements OnInit {
  [x: string]: any;

  slots : any [] = [];

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  IsEdit : boolean = false;

  form = new FormGroup({});

  ngOnInit(): void {

    // console.log(this.route.snapshot.params['id'])
    if(this.route.snapshot.params['id']){
      this.IsEdit = true;
       let slots = localStorage.getItem('slots')
       if(slots) this.slots = JSON.parse(slots)
      
      // let allslots = JSON.parse(slots || '')
      // allslots.forEach((slot : any)=>{
      
      // })
   
      
    }


  }
  onSavedData(slotnumber: any, slotrate: any)
  {
  

      let slot = {
       slotnumber: slotnumber, slotrate: slotrate
      };

      let slots = localStorage.getItem('slots')
      if(slots) this.slots = JSON.parse(slots)
      this.slots.push(slot)
      localStorage.setItem('slots' , JSON.stringify(this.slots));

      // localStorage.setItem(slot.id.toString(), JSON.stringify(slot));

      this.router.navigate(['','admin'])
  }


}
