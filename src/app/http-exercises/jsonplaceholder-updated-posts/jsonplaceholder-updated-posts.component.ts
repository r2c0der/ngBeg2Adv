import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import {NotFoundError} from "../common/not-found-error";
import {AppError} from "../common/app.error";
import {BadRequestError} from "../common/bad-request-error";


@Component({
  selector: 'rkm-jsonplaceholder-updated-posts',
  templateUrl: './jsonplaceholder-updated-posts.component.html',
  styleUrls: ['./jsonplaceholder-updated-posts.component.css']
})
export class JSONPlaceholderUpdatedPostsComponent implements OnInit {

  posts: any[];


  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAllPosts()
      .subscribe(response => {
        this.posts = response.json();
      },
        error => {
          alert('An unexpected error has occurred');
          console.log(error);
        });

  }

  createPost(postTitle: HTMLInputElement)
  {
    let postObj = {
      title: postTitle.value,
      id: postTitle.id
    }
    postTitle.value = '';

    this._postService.createPost(postObj)
      .subscribe(newPost => {

     postObj['id'] = newPost.json().id;
     console.log(newPost);
      this.posts.splice(0, 0, postObj);
      },
        (error: AppError) => {
        if(error instanceof BadRequestError){
          //this.<form>.setErrors(errors.json());
          alert('Bad Request made to the server');

        } else {
           alert('An unexpected error has occured');
          console.log(error);
        }

        });
  }

  updatePost(postObj){
    console.log("Update post: ", postObj.id);
   this._postService.updatePost(postObj)
      .subscribe(updatedPost => {
        console.log(updatedPost.json());
      },
        error => {
        alert('An unexpected error has occurred');
        console.log(error);

        });
  }

  deletePost(postObj){

    console.log("delete post: ", postObj.id);
  this._postService.deletePost(postObj.id)
      .subscribe(response => {
        let index = this.posts.indexOf(postObj);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('This post was not found. It may have been deleted.');
          } else {
            alert('An unexpected error has occurred');
            console.log(error);
          }
        });


  }


}
