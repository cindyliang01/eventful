import React, { Component } from "react";
import "./App.css";
import Posts from "./components/posts";

class App extends Component {
  state = {
    dummyListPosts: [
      {
        id: 1,
        like: 0,
        comments: [
          { id: 1, text: "commentOneFromPostOne", commentLikes: 1 },
          { id: 2, text: "commentTwoFromPostOne", commentLikes: 0 },
        ],
        post: "POST1",
      },
      {
        id: 2,
        like: 1,
        comments: [
          { id: 1, text: "commentOneFromPostTwo", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostTwo", commentLikes: 0 },
        ],
        post: "POST2",
      },
      {
        id: 3,
        like: 0,
        comments: [
          { id: 1, text: "commentOneFromPostThree", commentLikes: 0 },
          { id: 2, text: "commentTwoFromPostThree", commentLikes: 0 },
        ],
        post: "POST3",
      },
    ],

    dummyListTemplate: [
      {
        id: 0,
        like: 0,
        comments: [{ id: 1, text: "", commentLikes: 0 }],
        post: " ",
      },
    ],
  };

  createPost = (newPost) => {
    const copyOfPosts = [...this.state.dummyListPosts];
    const length = copyOfPosts.length;

    let emptyPostTemplate = JSON.parse(
      JSON.stringify(this.state.dummyListTemplate[0])
    );

    copyOfPosts[length] = emptyPostTemplate;
    copyOfPosts[length].post = newPost;
    copyOfPosts[length].id = length + 1;

    this.setState({ dummyListPosts: copyOfPosts });
  };

  addLike = (specificPost) => {
    // cloning specific post instead of altering the actual state
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };

    //only lets user like once --> Either shows like or unlike

    if (specificPost.like === 0) {
      copyOfPosts[index].like++;
      this.setState({ dummyListPosts: copyOfPosts });
    } else {
      copyOfPosts[index].like--;
      this.setState({ dummyListPosts: copyOfPosts });
    }
  };

  createComment = (newComment, specificPost) => {
    // cloning specific post instead of altering the actual state
    const copyOfPosts = [...this.state.dummyListPosts];
    const index = copyOfPosts.indexOf(specificPost);
    copyOfPosts[index] = { ...specificPost };

    const length = copyOfPosts[index].comments.length;
    copyOfPosts[index].comments[length] = {
      ...this.state.dummyListTemplate[0].comments[0],
    };
    // setting up new comment in specific post
    copyOfPosts[index].comments[length].text = newComment;
    copyOfPosts[index].comments[length].id = length + 1;
    this.setState({ dummyListPosts: copyOfPosts });
  };

  render() {
    return (
      <React.Fragment>
        <Posts
          listOfPosts={this.state.dummyListPosts}
          addLike={this.addLike}
          createPost={this.createPost}
          createComment={this.createComment}
        />
      </React.Fragment>
    );
  }
}

export default App;
