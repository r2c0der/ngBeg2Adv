import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import  {NotFoundError } from "../common/not-found-error";
import { AppError } from "../common/app.error";
import { BadInputError } from "../common/bad-input-error";


@Component({
  selector: 'rkm-jsonplaceholder-updated-posts',
  templateUrl: './jsonplaceholder-updated-posts.component.html',
  styleUrls: ['./jsonplaceholder-updated-posts.component.css']
})
export class JSONPlaceholderUpdatedPostsComponent implements OnInit {

  posts: any[];


  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAll()
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

    this._postService.create(postObj)
      .subscribe(newPost => {

     postObj['id'] = newPost.json().id;
     console.log(newPost);
      this.posts.splice(0, 0, postObj);
      },
        (error: AppError) => {
        if(error instanceof BadInputError){
          //this.<form>.setErrors(error._originalError.json());
        } else throw error;

        });
  }

  updatePost(postObj){
    console.log("Update post: ", postObj.id);
   this._postService.update(postObj)
      .subscribe(
        updatedPost => {
        console.log(updatedPost.json());
        });
  }

  // deletePost(postObj){

  deletePost(postObj){
    console.log("delete post: ", postObj);
  // this._postService.deletePost(postObj.id)
    this._postService.delete(postObj)
      .subscribe(response => {
        let index = this.posts.indexOf(postObj);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post was not found. It may have been deleted.');
          else throw error;

        });

  }



}
