import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  // private url:any = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) { 
    super('http://jsonplaceholder.typicode.com/posts',http);
  }

  // getPosts(){ 
  //   return this.http.get(this.url)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  // createPost(post:any) {
  //   return this.http.post<any>(this.url,JSON.stringify(post))
  //   .pipe(
  //     // catchError((error:Response) => {
  //     //   return throwError(new AppError(error));
  //     // })
  //     catchError(this.handleError)
  //   )
  // }
  // updatePost(post:any) {
  //   return this.http.patch<any>(this.url+'/'+post.id,JSON.stringify({isRead: true}))
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  // deletePost(id:any) {
  //   return this.http.delete(this.url + '/' + id)
  //   .pipe(
  //     // catchError((error:Response) => {
  //     //   if(error.status === 404)
  //     //   return throwError(new NotFoundError);
  //     //   return throwError(new AppError(error));
  //     // })
  //     catchError(this.handleError)

  //   )
  //   // .catch()
    
  // }

  // private handleError(error: Response) {

  //   if(error.status === 400)
  //   return throwError(new BadInput(error.json));
  //       if(error.status === 404)
  //       return throwError(new NotFoundError);
  //       return throwError(new AppError(error));
    
  // }
}
