import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([])
  })
  constructor(fb:FormBuilder) {//replacement to the initialization above
    this.form = fb.group({
      name: ['',Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    });
  }
  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic:FormControl | any) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
