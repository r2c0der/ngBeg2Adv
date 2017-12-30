import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";


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
        (error: Response) => {
        if(error.status === 400){
          alert('Server error');

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
        (error: Response) => {
          if(error.status === 404){
            alert('This post was not found. It may have been deleted.');
          } else {
            alert('An unexpected error has occurred');
          }

          console.log(error);
        });


  }


}
