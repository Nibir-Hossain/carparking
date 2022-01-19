import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slot-form',
  templateUrl: './slot-form.component.html',
  styleUrls: ['./slot-form.component.css']
})
export class SlotFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router : Router
  ) { }

  form = new FormGroup({});

  ngOnInit(): void {
  }
  onSavedData(slotnumber: any, slotrate: any)
  {
      let a = 0;
      for(let i = 0; i < localStorage.length; i++)
      {
        let key = localStorage.key(i);
        if (Number(key)>a)
        {
          a = Number(key);
        }
      }

     a = Number(a) + 1;

      console.log(localStorage);

      let slot = {
        id: a, slotnumber: slotnumber, slotrate: slotrate
      };
      localStorage.setItem(slot.id.toString(), JSON.stringify(slot));
      
      this.router.navigate(['','admin'])
  }


}
