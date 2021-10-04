import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
@Component({
    selector: 'courses',
    template: `
    {{ text | summary:10 }}
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }}
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'white'">Save</button>
    </div>
    <h2>{{ "Title:" + getTitle() }}</h2>
    <h2 [textContent]="title"></h2>
    <img src = "{{ imageUrl }}"/>
    <img [src]="imageUrl"/>
    <table>
        <tr>
            <td [attr.colSpan]="colSpan">aa</td>
            <td [attr.colSpan]="colSpan">aa</td>
        </tr>
    </table>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `,
})
export class CoursesComponent {
    text = `fsdjf bsdhjkf bgshdjf bsdhjf gsdhjfg sdhjfds`;
    isActive = true;
    title = "List of courses"
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 5;
    courses;
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    getTitle() {
        return this.title;
    }
    email = "me@example.com"
    onKeyUp() {
        // if ($event.keyCode === 13) 
        console.log(this.email)
    }
    onDivClicked() {
        console.log("Div was clicked");
    }
    onSave($event: any) {
        $event.stopPropagation();
        console.log("button was clicked", $event);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}