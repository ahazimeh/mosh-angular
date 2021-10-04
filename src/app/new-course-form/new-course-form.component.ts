import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })
  addTopic(topic:HTMLInputElement){
    this.form.get('topics')
  }
}
