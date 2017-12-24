import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'rkm-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewCourseFormComponent  {
  form: any;

/*  form = new FormGroup({
    name: new FormControl(" ", Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([])
  });*/

  constructor(_formBuilder: FormBuilder){
  this.form =   _formBuilder.group({
      name: ['', Validators.required],
      contact: _formBuilder.group({
        email: [],
        phone: []
      }),
      topics: _formBuilder.array([])
    })

  }




  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
  let index =   this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);

  }
  get topics(){
    return this.form.get('topics') as FormArray;

  }


}
