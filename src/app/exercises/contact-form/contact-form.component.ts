import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkm-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Mobile'
    },
    {
      id: 3,
      name: 'Office Phone'
    },
    {
      id: 4,
      name: 'Fax'
    },
    {
      id: 5,
      name: 'Office Mail'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  formSubmit(formObj: any){
    console.log(formObj);
  }

}
