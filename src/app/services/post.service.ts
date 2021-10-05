import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url:any = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){ 
    return this.http.get(this.url)
  }
  createPost(post:any) {
    return this.http.post<any>(this.url,JSON.stringify(post))
    .pipe(
      catchError((error:Response) => {
        if(error.status === 400)
        return throwError(new BadInput(error.json));
        return throwError(new AppError(error));
      })
    )
  }
  updatePost(post:any) {
    return this.http.patch<any>(this.url+'/'+post.id,JSON.stringify({isRead: true}))
  }
  deletePost(id:any) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError((error:Response) => {
        if(error.status === 404)
        return throwError(new NotFoundError);
        return throwError(new AppError(error));
      })
    )
    // .catch()
    
  }
}
