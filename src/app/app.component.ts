import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true
  }

  viewMode = 'map';

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ]
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: any) {
    course.name = "UPDATED"
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
      { id: 4, name: 'course4' },
    ]
  }
  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }
}
