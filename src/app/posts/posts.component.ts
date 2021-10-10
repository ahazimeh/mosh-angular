import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { 

   }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(response => {
      this.posts = response;
    }, 
    // error => {
    //   alert("An unexpected error occured.")
    //   console.log(error)
    // }
    )
  }
  createPost(input:HTMLInputElement) {
    let post:any = {title: input.value}
    this.posts.splice(0,0,post);

    input.value = '';
    
    this.service.create(post)
    .subscribe(response => {
      post.id = response.id
      console.log(response);
    }, 
    // (error:Response) => {
    //   if(error.status === 400){
    //   // this.form.setErrors(error.json())
    // }
    //   else
    //   {
    //     alert("An unexpected error occured.")
    //     console.log(error)
    //   }
    // }
    (error:AppError) => {
      this.posts.splice(0,1)

      if(error instanceof BadInput){
      // this.form.setErrors(error.json())
    }
      else{
        // alert("An unexpected error occured.")
        // console.log(error)
        throw error;//so it can be handled globally
      }
    }
    )
  }
  updatePost(post:any) {
    this.service.update(post)
    .subscribe(response => {
      console.log(response);
    }, 
    // error => {
    //   alert("An unexpected error occured.")
    //   console.log(error)
    // }
    )
    // this.http.put<any>(this.url,JSON.stringify(post))

  }
  deletePost(post:any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1)

    this.service.delete(post.id)
    .subscribe(response => {
    }, 
    // (error:Response) => {
    //   if(error.status === 404)
    //   alert("this post has already been deleted.")
    //   else{
    //     alert("An unexpected error occured.")
    //     console.log(error)
    //   }
    // }
    (error:AppError) => {
      this.posts.splice(index,0,post)
      if(error instanceof NotFoundError)
      alert("this post has already been deleted.")
      else{
        throw error;
        // alert("An unexpected error occured.")
        // console.log(error)
      }
    }
    )
  }

}
