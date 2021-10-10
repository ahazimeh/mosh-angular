import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
//   private url:any;

  constructor(@Inject(String) private url:string,private http: HttpClient) { }

  getAll(){ 
    return this.http.get(this.url)
    .pipe(
            // TODO: Do Your Staff Here! 
            catchError(this.handleError),
            map(response => {

                return response;//you are able to modify the response
            })
            )
  }
  create(resource:any) {
    return this.http.post<any>(this.url,JSON.stringify(resource))
    .pipe(
      // catchError((error:Response) => {
      //   return throwError(new AppError(error));
      // })
      catchError(this.handleError)
    )
  }
  update(resouce:any) {
    return this.http.patch<any>(this.url+'/'+resouce.id,JSON.stringify({isRead: true}))
    .pipe(
      catchError(this.handleError)
    )
  }
  delete(id:any) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      // catchError((error:Response) => {
      //   if(error.status === 404)
      //   return throwError(new NotFoundError);
      //   return throwError(new AppError(error));
      // })
      catchError(this.handleError)

    )
    // .catch()
    
  }

  private handleError(error: Response) {

    if(error.status === 400)
    return throwError(new BadInput(error.json));
        if(error.status === 404)
        return throwError(new NotFoundError);
        return throwError(new AppError(error));
    
  }
}
