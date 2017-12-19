import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'rkm-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewCourseFormComponent  {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }


}
